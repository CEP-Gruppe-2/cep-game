/**
 * Set Key and Value into Localstorage
 * @param name {string} - Key of Localstorage
 * @param value {string} - Value of Localstorage
 * @returns {void}
 */
const setItemLocalStorage = (name : string, value : string) : void => {
    window.localStorage.setItem(name, value); // set key and value
}


/**
 * Set Key and Array with multiple Values into Localstorage
 * @param name {string} - Key of Localstorage
 * @param value {Object | Array} -  Array with multiple Values
 * @returns {void}
 */
const setItemJsonLocalStorage = (name : string, value : Object) => {
    localStorage.setItem(name, JSON.stringify(value)); // set key and json value
}

/**
 * Returns the Value of the Key
 * @param name {string} - Key of Localstorage
 * @returns {string}
 */
const getItemLocalStorage = (name : string) : string => {
    let ls = localStorage.getItem(name); // get value with follow key
    if (typeof ls !== 'undefined' && ls !== null){ // is not undefined and not null
        return ls; // yes, return the value
    }else return ""; // no, return empty value
}

/**
 * Overrides the old Points with the new Points
 * @param points {string} - get Value for the Key Points or Key itself
 * @param value {string | number} - the points that should be added to the old points
 * @returns {void}
 */

const changePointsLocalStorage = (points : string, value : string | number): void =>{
    let valuePoints : number; // new Points


    if(localStorage.getItem(points) != null){ // the name of the points exist?
        valuePoints = parseInt(localStorage.getItem(points)!); // parse into Integer
        if(typeof value == "number"){ // is type of number?
            valuePoints += value!; // yes, than add points to new points
        }else{
            valuePoints += parseInt(value!); // no, than parse and add to new points
        }
        localStorage.setItem(points, valuePoints.toString()) // set / save new points into localstorage 
    }else{
        if(typeof value == "number"){ // points not exist, than set the old points to localstorage
            localStorage.setItem(points, value.toString())
        }else{
            localStorage.setItem(points, value)
        }
    }
}

/**
 * Return parsed JSON-Array from Localstorage
 * @param name {string} - the Name of the Key
 * @returns {Object | undefined}
 */
const getItemJsonLocalStorage = (name : string): Object | undefined  => {
    let item = localStorage.getItem(name); // get the Value
    if(item != null){ // is not null
        return JSON.parse(item) // yes, than return json object
    }else return undefined; // no, than return undefined (its something like null) or nothing
}

/**
 * Return String Object or Array of type string with all Keys and Values inside Localstorage
 * @returns {string[] | Array<string>}
 */
const getAllLocalStorage = () : string[] | Array<string> => {

    var archive = [], // create empty Array / Object 
        keys = Object.keys(localStorage), // get all stuff from localstorage (Keys and Values)
        i = 0, key; // create index = 0, and key that will get all information from LS

    for (; key = keys[i]; i++) { // loop
        archive.push( key + '=' + localStorage.getItem(key)); // get all values by the key und add to the Array
    }
    console.log("LocalStorage Keys: ", archive); // print the array
    
    return archive; // return array
}

/**
 * Returns Array with all Points that the use get from all the Games
 * @returns {Array<string>}
 */
const getArrayWithGainedPoints = () : Array<string> => {
    let stringArray : string = localStorage.getItem("point")!; // get value by the key

    if(stringArray != null || stringArray != undefined){ // key is not null and not undefined
        return stringArray.split(","); // separate by comma or , and return Array type of string
    }
    return []; // return empty array
}

/**
 * Sum all the Points or substract points and return the total 
 * @returns {number}
 */
const returnTotalPoints = () : number => {
    let len : number = getArrayWithGainedPoints().length, // get len of the returned array
        points = 0; // set points
    if(len == 0){ // is 0 than return the len
        return len;
    }else{
        
        for(let i = 0; i < len; i++){ // loop
            if(i % 2 != 0){ // is index or i not 0 when it devided by 2 eg. 3 % 2 != 0 (result != 0, rest 1)
                points += parseInt(getArrayWithGainedPoints()[i]) // parse points to integer and add to the points
            }
        }
        if(localStorage.getItem("exchangePoints") != null){ // is key not null
            points -= parseInt(localStorage.getItem("exchangePoints")!); // yes, parse to integer and substract from the points
        }

        return points; // remove substracted or summed points
    }
}

/**
 * Return position of title or key
 * @param title {string} - Value that should be founded
 * @returns {Boolean} - returns pos of the element, when founded or -1 when not founded
 */
const itemExistInLocalstorage = (title : string) : Boolean => {
    return getArrayWithGainedPoints().indexOf(title) > -1; // calling getArrayWithGainedPoints() and get pos
}


/**
 * Adds points that the Used reiceved in the Games
 * @param name {string} - Key of Localstorage 
 * @param value {string} - Value / Points that should be added to Localstorage
 * @returns {void}
 */
const  addPointsToLocalStorage = (name: string, value : string) : void => {
    let arr : Array<any>; // create Array type of any
    
    if(name != null && value != null){ // is key and value not null?
        if(localStorage.getItem("point") != null){ // is key - point exist or is not null
            arr = localStorage.getItem("point")!.split(","); // get the value of the key point and split by comma or ,
            arr.push([name, value]) // insert key | name and value in the array
            localStorage.setItem("point", JSON.parse(JSON.stringify(arr))) // create JSON Object from Array and set that Data into Localstorage
        }else{ // is null
            arr = [name, value] // insert key and value into array
            localStorage.setItem("point", JSON.parse(JSON.stringify(arr))) // create JSON Object and save the data in LS
        }
    } 
}


/**
 * Save Points into Localstorage
 * @param points {Array<any>} - Points that should be added to LS
 * @returns {void}
 */
const addPointsArrayToLocalStorage = (points : Array<any>) : void => {
    // create JSON Object and save the Data into LS
    localStorage.setItem("point", JSON.parse(JSON.stringify(points)))
}

/**
 * Clear Localstorage
 * @returns {void}
 */
const removeAllPointsFromLocalStorage = () : void => {
    localStorage.clear();
}

/**
 * Return the Time or Date of Last Point exchange
 * @returns {number}
 */
const returnLastTimeExchangePoints = () : number  => {
    let ls = localStorage.getItem("lastExchange"); // get the value
    let dateTime = Date.now(); // in seconds // get time in ms (now)
    if (ls != null) { // is not null?
        return parseInt(ls); // yes, then parse to Integer and return it
    }else{
        localStorage.setItem("lastExchange", dateTime.toString()); // parse dateTime to String and save it in LS
        return dateTime; // return dateTime in ms
    }
}

/**
 * Exchange Points and set new Time
 * @param points {number} - Points that will be exchange
 * @returns {void}
 */
const exchangePointsAndSetLastNextExchang = (points  : number) : void => {
    let milliseconds = 60000; // ms
    let time = points * milliseconds; // multiplication, to get time in ms
    time = Date.now() + time; // add time to the Date in ms

    localStorage.setItem("lastExchange", time.toString()); // set new Time
}

/**
 * Difference between last Exchange in Minutes
 * @returns {number} - returns difference between last Points exchange and now
 */
const getLastTimeExchangeMinutes = () : number => {
    let now = Date.now(); // get the time (now)
    // get last Exchange, and convert ms in minutes
    return Math.round((((returnLastTimeExchangePoints() - now) % 86400000) % 3600000) / 60000);
}

/**
 * Difference between last Exchange in Days
 * @returns {number} - returns difference between last Points exchange and now
 */
const getLastTimeExchangeDays = () : number => {
    let now = Date.now(); // get the time (now)
    // get last Exchange, and convert ms in days
    return Math.floor((returnLastTimeExchangePoints() - now) / 86400000);
}

/**
 * Difference between last Exchange in Hours
 * @returns {number} - returns difference between last Points exchange and now
 */
const getLastTimeExchangeHours = () : number => {
    let now = Date.now(); // get the time (now)
    // get last Exchange, and convert ms in days
    return Math.floor(((returnLastTimeExchangePoints() - now) % 86400000) / 3600000);
}

/**
 * Is the last Exchange exceeded or not
 * @returns {Boolean} - Last Exchange exceeded - true or false
 */
const isLastExchangePermitted = () : Boolean => {
    if(getLastTimeExchangeMinutes() < 0) return false // is Last Exchange in minus area, then false
    else return true; // else true
}

/**
 * Is the last Exchange exceeded or not, with debuging option
 * @returns {Boolean} - Last Exchange exceeded - true or false
 */
const isLastExchangePermittedDebug = (debug : true) => {
    // display last Exceed in minutes and return true or false
    if(debug) console.log("Wurde die Dauer des letzten Eintauschen überschritten?:", getLastTimeExchangeMinutes() < 0, "exchange in Minutes", getLastTimeExchangeMinutes());
    return isLastExchangePermitted(); // call isLastExchangePermitted Function
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
