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

export {
    setItemJsonLocalStorage,
    setItemLocalStorage,
    getItemLocalStorage,
    getItemJsonLocalStorage,
    getAllLocalStorage
}
