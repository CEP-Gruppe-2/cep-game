const setItemLocalStorage = (name : string, value : string) => {
    localStorage.setItem(name, value);
}

 const setItemJsonLocalStorage = (name : string, value : Object) => {
    localStorage.setItem(name, JSON.stringify(value));
}

 const getItemLocalStorage = (name : string) => {
    localStorage.getItem(name);
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
    return stringArray.split(",");
}

const addPointsToLocalStorage = (name: string, value : string) : void => {
    let jsonArray : string, arr : Array<any>;
    
    if(name != null && value != null){
        jsonArray = localStorage.getItem("point")!;
        arr = jsonArray.split(",")
        arr.push([name, value])
        localStorage.setItem("point", JSON.parse(JSON.stringify(arr)))   
    }
}

const addPointsArrayToLocalStorage = (points : Array<any>) : void => {
    localStorage.setItem("point", JSON.parse(JSON.stringify(points)))
}

export {
    setItemJsonLocalStorage,
    setItemLocalStorage,
    getItemLocalStorage,
    getItemJsonLocalStorage,
    getAllLocalStorage,
    addPointsArrayToLocalStorage,
    addPointsToLocalStorage,
    getArrayWithGainedPoints
}
