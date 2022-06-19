function setItemLocalStorage  (name : string, value : string) : void {
    window.localStorage.setItem(name, value); // set key and value
}

function getItemLocalStorage  (name : string) : string  {
    let ls = window.localStorage.getItem(name); // get value with follow key
    if (typeof ls !== 'undefined' && ls !== null){ // is not undefined and not null
        return ls; // yes, return the value
    }else return ""; // no, return empty value
}

function getArrayWithGainedPoints  () : Array<string>  {
    let stringArray : string = window.localStorage.getItem("point")!; // get value by the key

    if(stringArray != null || stringArray != undefined){ // key is not null and not undefined
        return stringArray.split(","); // separate by comma or , and return Array type of string
    }
    return []; // return empty array
}

function itemExistInLocalstorage  (title : string) : Boolean  {
    return getArrayWithGainedPoints().indexOf(title) > -1; // calling getArrayWithGainedPoints() and get pos
}

function addPointsToLocalStorage (name: string, value : string) : void {
    let arr : Array<any>; // create Array type of any
    
    if(name != null && value != null){ // is key and value not null?
        if(window.localStorage.getItem("point") != null){ // is key - point exist or is not null
            arr = window.localStorage.getItem("point")!.split(","); // get the value of the key point and split by comma or ,
            arr.push([name, value]) // insert key | name and value in the array
            window.localStorage.setItem("point", JSON.parse(JSON.stringify(arr))) // create JSON Object from Array and set that Data into Localstorage
        }else{ // is null
            arr = [name, value] // insert key and value into array
            window.localStorage.setItem("point", JSON.parse(JSON.stringify(arr))) // create JSON Object and save the data in LS
        }
    } 
}

function returnTotalPoints  () : number  {
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
        if(window.localStorage.getItem("exchangePoints") != null){ // is key not null
            points -= parseInt(window.localStorage.getItem("exchangePoints")!); // yes, parse to integer and substract from the points
        }

        return points; // remove substracted or summed points
    }
}
function removeAllPointsFromLocalStorage  () : void {
    window.localStorage.clear();
}

export{
    setItemLocalStorage,
    getItemLocalStorage,
    addPointsToLocalStorage,
    itemExistInLocalstorage,
    getArrayWithGainedPoints,
    returnTotalPoints,
    removeAllPointsFromLocalStorage 
}
