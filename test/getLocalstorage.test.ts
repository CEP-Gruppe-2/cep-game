import {getItemLocalStorage, setItemLocalStorage } from '../src/functions/localstorage';
import {fakeLocalStorage} from '../src/functions/fakeLocalstorage'

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
        Ruft die "getItemLocalStorage" Methode auf und 
        holt aus der Localstorage den Value, das unter dem Namen "the-key" zur 
        Verfügung stehen soll
    */
    it('saves the key to the storage', () => {
        setItemLocalStorage('they-key', 'fake-value');
        console.log(getItemLocalStorage('they-key'));
        
        window.localStorage.setItem('the-key', 'fake-value')

        expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
    });
});