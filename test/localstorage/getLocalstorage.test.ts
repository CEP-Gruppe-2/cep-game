import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { getItemLocalStorage, setItemLocalStorage } from './lsfunctions';

/**
 * @author b.kotikov
 */

describe('Speichern Key und Value in Localstorage und Abrufen des Values', () => {

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
    it('Setzt den Key und Value in der Localstorage ab und gibt den Value zurück', () => {

        // ruft die Methode ... auf und speichert Key und Value in LS ab
        setItemLocalStorage('they-key', 'fake-value');

        //vergleicht die beiden werte
        expect(getItemLocalStorage("they-key")).toEqual('fake-value');
    });
});