import { changeCookie, getCookie } from "./cookies";

const addPoints = (points : number) => {
    points = points + parseInt(getPoints());
    changeCookie({name: "points", value: points});
}

const removePoints = (points : number) => {
    points = points - parseInt(getPoints());
    changeCookie({name: "points", value: points});
}

const getPoints = function () : string {
    return getCookie("points")
}

export {
    addPoints, 
    removePoints,
    getPoints
}