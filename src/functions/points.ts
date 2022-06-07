import { changeCookie, getCookie } from './cookies';

const addPoints = (points : number) => {
  points = points + parseInt(getPoints());
  changeCookie({name: 'points', value: points.toString()});
};

const removePoints = (points : number) => {
  points = points - parseInt(getPoints());
  changeCookie({name: 'points', value: points.toString()});
};

const getPoints = function () : string {
  return getCookie('points')!;
};

export {
  addPoints, 
  removePoints,
  getPoints
};