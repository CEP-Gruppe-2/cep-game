// @ts-ignore
import Cookies from 'js-cookie';

/**
 * @author b.kotikov
 */

/**
 * @type {Cook}
 */
type Cook = {
  name: string;
  value: string;
};

/**
 * Return Cookie Value by Cookie Name
 * @param cookieName {string} - Name of the Cookie
 * @returns {string | undefined}
 */

const getCookie = (cookieName: string) : string | undefined => {
  return Cookies.get(cookieName); // Call get Function inside Cookie Package and return Cookie Value
};

/**
 * Return true if Cookie with following Name exist or false
 * @param cookieName {string} - Name of the Cookie
 * @returns {boolean} - returns true or false
 */
const cookieExist = (cookieName : string) : boolean => {
  return Cookies.get(cookieName) != undefined; // call get Function inside Cookie Package and return true or false
};

/**
 * Save Cookie if it not exist and return true if cookie should be set or false if not
 * @param setCookie {Boolean} - Should Cookie saved? 
 * @param cookieData  {Cook} - Cookie Object of type Cook
 * @returns {boolean}
 */
const setCookieIfNotExist = (setCookie : Boolean, cookieData : Cook) : boolean => {
  let cookieExist = Cookies.get(cookieData.name) != undefined; // get Cookie if it Exist
    
  if(!cookieExist && setCookie){ // cookies exist ? and Cookie should be set
    Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' }); // set Cookie
    return true; // return true
  }

  return false; // return false
};

/**
 * Save Cookie if not Exist and add Expiration time
 * @param setCookie {Boolean} - Should Cookie saved? 
 * @param cookieData {Cook} - Object of type Cook
 * @returns {void}
 */
const setCookieIfNotExistWithExpire = (setCookie : Boolean, cookieData : Cook) : void => {
  let cookieExist = Cookies.get(cookieData.name) != undefined; // get Cookie

  if(!cookieExist && setCookie){ // cookie exist? and setCookie true
    Cookies.set(cookieData.name, cookieData.value, { expires: 7, path: '' }); // set Cookie and expire Date for 7 Days
  }
};

/**
 * Delete Cookie by the Name without Url Path
 * @param cookieName {string} - Delete Cookie by the Name
 * @returns {void}
 */
const deleteCookieWithoutPath = (cookieName : string) : void => {
  Cookies.remove(cookieName); // delete Cookie
};

/**
 * Delete Cookie by the Name with Url Path
 * @param cookieName {string} - Delete Cookie by the Name
 * @returns {void}
 */
const deleteCookieWithPath = (cookieName : string) : void => {
  Cookies.remove(cookieName, { path: '' }); // delete Cookie with Url path
};

/**
 * Change the Value of old Cookie to the new Value
 * @param cookie {Cook} - Cook Object
 * @return {void}
 */
const changeCookie = (cookie : Cook) : void => {
  Cookies.set(cookie.name, cookie.value, { expires: 7, path: '' }); // change old Cookie
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

