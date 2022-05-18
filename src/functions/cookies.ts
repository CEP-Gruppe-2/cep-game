import Cookies from 'js-cookie'

const cookieExist = (cookieName : String) => {
    return Cookies.get(cookieName) == undefined ? false : true;
}

const setCookieIfNotExist = (setCookie : Boolean, cookieData : Object) => {
    let cookieExist = Cookies.get(cookieData.name) == undefined ? false : true;

    if(!cookieExist && setCookie){
        Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' })
        return true;
    }

    return false;
}

const setCookieIfNotExistWithExpire = (setCookie : Boolean, cookieData : Object, expire : Number) => {
    let cookieExist = Cookies.get(cookieData.name) == undefined ? false : true;

    if(!cookieExist && setCookie){
        if(expire != null && expire != undefined){
            Cookies.set(cookieData.name, cookieData.value, { expires: expire, path: '' })
        }else{
            Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' })
        }
    }
}

const deleteCookieWithoutPath = (cookieName : String) => {
    Cookies.remove(cookieName);
}

const deleteCookieWithPath = (cookieName : String) => {
    Cookies.remove(cookieName, { path: '' });
}

export {
    cookieExist,
    setCookieIfNotExist,
    deleteCookieWithoutPath,
    deleteCookieWithPath
}

