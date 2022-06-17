import { changeCookie, getCookie } from './cookies';

/**
 * Save points into Cookie
 * @param points {number} - Value of points
 * @returns {void}
 */
const addPoints = (points : number) : void => {
  points = points + parseInt(getPoints()); // get Points from Cookie, parse to Integer and add it to Points
  changeCookie({name: 'points', value: points.toString()}); // call changeCookie Function and change old Cookie Value
};

/**
 * Remove points from Cookies
 * @param points {number} - Value of points
 * @returns {void}
 */
const removePoints = (points : number) : void => {
  points = points - parseInt(getPoints());
  changeCookie({name: 'points', value: points.toString()});
};

/**
 * Return points from Cookies
 * @returns {string}
 */
const getPoints = function () : string {
  return getCookie('points')!;
};

export {
  addPoints, 
  removePoints,
  getPoints
};