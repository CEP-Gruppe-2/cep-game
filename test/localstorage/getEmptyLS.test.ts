import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { getItemLocalStorage } from './lsfunctions';

/**
 * @author b.kotikov
 */

describe('Speichern Key und Value in Localstorage', () => {

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
    it('Localstorage muss leer sein', () => {

        // ruft die Methode ... auf und speichert Key und Value in LS ab
        //setItemLocalStorage('they-key', 'fake-value');

        //vergleicht die beiden werte
        expect(getItemLocalStorage("they-key")).toEqual("");
    });
});