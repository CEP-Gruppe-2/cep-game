// @ts-ignore
import Cookies from 'js-cookie';

type Cook = {
  name: string;
  value: string;
};

const getCookie = (cookieName: String) => {
  return Cookies.get(cookieName);
};

const cookieExist = (cookieName : String) => {
  return Cookies.get(cookieName) != undefined;
};

const setCookieIfNotExist = (setCookie : Boolean, cookieData : Cook) => {
  let cookieExist = Cookies.get(cookieData.name) != undefined;
    
  if(!cookieExist && setCookie){
    Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' });
    return true;
  }

  return false;
};

const setCookieIfNotExistWithExpire = (setCookie : Boolean, cookieData : Cook, expire : Number) => {
  let cookieExist = Cookies.get(cookieData.name) != undefined;

  if(!cookieExist && setCookie){
    if(expire){
      Cookies.set(cookieData.name, cookieData.value, { expires: expire, path: '' });
    }else{
      Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' });
    }
  }
};

const deleteCookieWithoutPath = (cookieName : String) => {
  Cookies.remove(cookieName);
};

const deleteCookieWithPath = (cookieName : String) => {
  Cookies.remove(cookieName, { path: '' });
};

const changeCookie = (cookie : Cook) => {
  Cookies.set(cookie.name, cookie.value, { expires: 7, path: '' });
};

export {
  cookieExist,
  setCookieIfNotExist,
  deleteCookieWithoutPath,
  deleteCookieWithPath,
  getCookie,
  changeCookie,
  setCookieIfNotExistWithExpire
};

