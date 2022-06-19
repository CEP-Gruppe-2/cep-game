import {setItemLocalStorage } from '../../src/functions/localstorage';
import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'

/**
 * @author b.kotikov
 */

describe('Localstorage', () => {

    /*
        Es generiert ein "fake" Localstorage
    */
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
        });
    });

    /*
        Ruft die "setItemLocalStorage" Methode auf und 
        setzt Name und Value in der Localstorage
    */
    it('saves the key to the storage', () => {
        setItemLocalStorage('they-key', 'fake-value');
        window.localStorage.setItem('the-key', 'fake-value')

        expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
    });
});