function exchangePointsAndSetLastNextExchang (points  : number) : void  {
    let milliseconds = 60000;
    let time = points * milliseconds;
    time = Date.now() + time;

    window.localStorage.setItem("lastExchange", time.toString())
}

function returnLastTimeExchangePoints  ()  {
    let ls = window.localStorage.getItem("lastExchange")
    let dateTime = Date.now(); // in seconds
    if (ls != null) {
        return parseInt(ls);
    }else{
        window.localStorage.setItem("lastExchange", dateTime.toString());
        return dateTime;
    }
}

function getLastTimeExchangeMinutes  ()  {
    let now = Date.now();
    return Math.round((((returnLastTimeExchangePoints() - now) % 86400000) % 3600000) / 60000);
}


function getLastTimeExchangeDays ()  {
    let now = Date.now();
    return Math.floor((returnLastTimeExchangePoints() - now) / 86400000);
}

// @ts-ignore
function getLastTimeExchangeHours  ()  {
    let now = Date.now();
    return Math.floor(((returnLastTimeExchangePoints() - now) % 86400000) / 3600000);
}

// @ts-ignore
function isLastExchangePermitted  ()  {
    if(getLastTimeExchangeMinutes() < 0) return false
    else return true;
}

export {
    getLastTimeExchangeDays,
    getLastTimeExchangeHours,
    getLastTimeExchangeMinutes,
    isLastExchangePermitted,
    exchangePointsAndSetLastNextExchang,
    returnLastTimeExchangePoints
}