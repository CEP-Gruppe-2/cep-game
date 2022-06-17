
/**
 * Imitate Localstorage
 */
export const fakeLocalStorage = (function () {
    let store : Array<any>= [];
  
    return {
      /**
       * Return value by the key
       * @param key {any} - name of the key inside Localstorage
       * @returns {any | null}
       */
      getItem: function (key: any) : any | null{
        return store[key] || null;
      },
      /**
       * Save key and value into Localstorage
       * @param key {any} - name of the key
       * @param value {any} - value that should be saved
       * @returns {void}
       */
      setItem: function (key: any, value: any) : void {
        store[key] = value.toString();
      },
      /**
       * Remove LocalStorage item by the key
       * @param key {any} - name of the key
       * @returns {void}
       */
      removeItem: function (key: any) : void {
        delete store[key];
      },
      /**
       * Clear LocalStorage
       * @returns {void}
       */
      clear: function () : void {
        store = [];
      },
    };
  })();