export const redirectTo = (redirectUrl : String, connectionType : String) => {
    /*
        if (location.protocol !== "https:"){
            location.replace(window.location.href.replace("http:", "https:"));
        }
    */
    window.location.href = "" + redirectUrl;
   
}

export const redirectToWithParameter = (redirectUrl : String, urlParameters : String, urlParameter : String) => {

    window.location.href = "" + redirectUrl + "?" + urlParameter + "=" + urlParameters;
}