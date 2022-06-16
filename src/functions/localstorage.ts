const setItemLocalStorage = (name : string, value : string) => {
    window.localStorage.setItem(name, value);
}

 const setItemJsonLocalStorage = (name : string, value : Object) => {
    localStorage.setItem(name, JSON.stringify(value));
}

 const getItemLocalStorage = (name : string) => {
    localStorage.getItem(name);
}

const changePointsLocalStorage = (points : string, value : string | number) =>{
    let valuePoints : number;
    if(localStorage.getItem(points) != null){
        valuePoints = parseInt(localStorage.getItem(points)!);
        if(typeof value == "number"){
            valuePoints += value!;
        }else{
            valuePoints += parseInt(value!);
        }
        localStorage.setItem(points, valuePoints.toString())
    }else{
        if(typeof value == "number"){
            localStorage.setItem(points, value.toString())
        }else{
            localStorage.setItem(points, value)
        }
    }
}

const getItemJsonLocalStorage = (name : string) => {
    let item = localStorage.getItem(name);
    if(item != null){
        return JSON.parse(item)
    }else return undefined;
}

const getAllLocalStorage = () => {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
    }
    console.log("LocalStorage Keys: ", archive);
    
    return archive;
}

const getArrayWithGainedPoints = () : Array<string> => {
    let stringArray : string = localStorage.getItem("point")!;

    if(stringArray != null || stringArray != undefined){
        return stringArray.split(",");
    }
    return [];
}

const returnTotalPoints = () : number => {
    let len : number = getArrayWithGainedPoints().length,
        points = 0;
    if(len == 0){
        return len;
    }else{
        
        for(let i = 0; i < len; i++){
            if(i % 2 != 0){
                points += parseInt(getArrayWithGainedPoints()[i])
            }
        }
        if(localStorage.getItem("exchangePoints") != null){
            points -= parseInt(localStorage.getItem("exchangePoints")!);
        }

        return points;
    }
}

const itemExistInLocalstorage = (title : string) : Boolean => {
    return getArrayWithGainedPoints().indexOf(title) > -1;
}

const  addPointsToLocalStorage = (name: string, value : string) : void => {
    let arr : Array<any>;
    
    if(name != null && value != null){
        if(localStorage.getItem("point") != null){
            arr = localStorage.getItem("point")!.split(",");
            arr.push([name, value])
            localStorage.setItem("point", JSON.parse(JSON.stringify(arr)))
        }else{
            arr = [name, value]
            localStorage.setItem("point", JSON.parse(JSON.stringify(arr)))
        }
    } 
}

const addPointsArrayToLocalStorage = (points : Array<any>) : void => {
    localStorage.setItem("point", JSON.parse(JSON.stringify(points)))
}

const removeAllPointsFromLocalStorage = () => {
    localStorage.clear();
}

const returnLastTimeExchangePoints = ()  => {
    let ls = localStorage.getItem("lastExchange");
    let dateTime = Date.now(); // in seconds
    if (ls != null) {
        return parseInt(ls);
    }else{
        localStorage.setItem("lastExchange", dateTime.toString());
        return dateTime;
    }
}

const exchangePointsAndSetLastNextExchang = (points  : number) : void => {
    let milliseconds = 60000;
    let time = points * milliseconds;
    time = Date.now() + time;

    localStorage.setItem("lastExchange", time.toString());
}

const getLastTimeExchangeMinutes = () => {
    let now = Date.now();
    return Math.round((((returnLastTimeExchangePoints() - now) % 86400000) % 3600000) / 60000);
}

const getLastTimeExchangeDays = () => {
    let now = Date.now();
    return Math.floor((returnLastTimeExchangePoints() - now) / 86400000);
}

const getLastTimeExchangeHours = () => {
    let now = Date.now();
    return Math.floor(((returnLastTimeExchangePoints() - now) % 86400000) / 3600000);
}

const isLastExchangePermitted = () => {
    if(getLastTimeExchangeMinutes() < 0) return false
    else return true;
}

const isLastExchangePermittedDebug = (debug : true) => {
    if(debug) console.log("Wurde die Dauer des letzten Eintauschen überschritten?:", getLastTimeExchangeMinutes() < 0, "exchange in Minutes", getLastTimeExchangeMinutes());
    return isLastExchangePermitted();
}

export {
    setItemJsonLocalStorage,
    setItemLocalStorage,
    getItemLocalStorage,
    getItemJsonLocalStorage,
    getAllLocalStorage,
    addPointsArrayToLocalStorage,
    addPointsToLocalStorage,
    getArrayWithGainedPoints,
    removeAllPointsFromLocalStorage,
    changePointsLocalStorage,
    itemExistInLocalstorage,
    returnTotalPoints, 
    getLastTimeExchangeDays,
    getLastTimeExchangeHours,
    getLastTimeExchangeMinutes,
    isLastExchangePermitted,
    isLastExchangePermittedDebug,
    exchangePointsAndSetLastNextExchang
}
