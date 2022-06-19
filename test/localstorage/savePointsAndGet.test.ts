import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { addPointsToLocalStorage, returnTotalPoints } from './lsfunctions';

/**
 * @author b.kotikov
 */

describe('Abfragen des gesamt Energie bzw. Punkte', () => {

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
    it('Hier wird es abgefragt, wie viel Punkte im Array drin sind', () => {

        //fügt Punkte zur LS hinzu
        addPointsToLocalStorage("Einleitung", "300");
        addPointsToLocalStorage("Einleitung", "400");

        //vergleicht die beiden werte
        expect(returnTotalPoints()).toBe(700)
    });
});