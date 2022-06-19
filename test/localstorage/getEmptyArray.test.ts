import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import { getArrayWithGainedPoints } from './lsfunctions';

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
    it('Die Länge des Arrays muss 0 sein, da dieser leer ist', () => {

        //fügt Punkte zur LS hinzu
        //addPointsToLocalStorage("Einleitung", "300");

        //vergleicht die beiden werte
        expect(getArrayWithGainedPoints().length).toBe(0)
    });
});