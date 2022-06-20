import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { addPointsToLocalStorage, itemExistInLocalstorage } from './lsfunctions';


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
        Ruft die "addPointsToLocalStorage" Methode auf und 
        setzt Name und Value in der Localstorage
    */
    it('Localstorage muss zurückgeben, wenn der abgefrate Key existiert', () => {

        //fügt Punkte zur LS hinzu
        addPointsToLocalStorage("Einleitung", "300");

        //vergleicht die beiden werte
        expect(itemExistInLocalstorage("Einleitung")).toBe(true)
    });
});