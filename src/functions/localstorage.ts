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
    changePointsLocalStorage
}
