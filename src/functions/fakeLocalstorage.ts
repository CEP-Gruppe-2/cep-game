export const fakeLocalStorage = (function () {
    let store : Array<any>= [];
  
    return {
      getItem: function (key: any) {
        return store[key] || null;
      },
      setItem: function (key: any, value: any) {
        store[key] = value.toString();
      },
      removeItem: function (key: any) {
        delete store[key];
      },
      clear: function () {
        store = [];
      },
    };
  })();