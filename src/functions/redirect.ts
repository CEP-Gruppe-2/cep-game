export const redirectTo = (redirectUrl : String, connectionType : String) => {
    /*
        if (location.protocol !== "https:"){
            location.replace(window.location.href.replace("http:", "https:"));
        }
    */
    window.location.href = "" + redirectUrl;
   
}