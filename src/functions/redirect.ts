
/**
 * Redirect to the URL and set connection Type -> HTTP | HTTPS
 * @param redirectUrl {String} - redirect url
 * @param _connectionType {String} - connection type
 */
export const redirectTo = (redirectUrl : String, _connectionType : String) => {
  /*
        if (location.protocol !== "https:"){
            location.replace(window.location.href.replace("http:", "https:"));
        }
    */
  window.location.href = '' + redirectUrl; // redirect
   
};

/**
 * Redirect to some Page
 * @param redirectUrl {String} - url
 * @param urlParameters {String} - url parameters (multiple)
 * @param urlParameter {String} - url parameter (only one)
 * @returns {void}
 */
export const redirectToWithParameter = (redirectUrl : String, urlParameters : String, urlParameter : String) : void => {
  // redirect
  window.location.href = '' + redirectUrl + '?' + urlParameter + '=' + urlParameters;
};