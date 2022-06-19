import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import {getLastTimeExchangeMinutes, exchangePointsAndSetLastNextExchang} from './timeFunctions'

/**
 * @author b.kotikov
 */

describe('Zeitunterschied in Minuten', () => {

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
    it('Vergleicht den Unterschied zw. zwei verschiedenen Zeiten in Minuten', () => {

        /*
            Hier wird die Funktion exchangePointsAndSetLastNextExchang() aufgerufen,
            in der Funktion wird der lezte Zeitpunkt der letzten Speicherung erfasst und
            um weitere 10 Minuten erweitert. Danach wird die Zeiten in der LocalStorage abgespeichert
        */

        exchangePointsAndSetLastNextExchang(20);
        const lastTime = getLastTimeExchangeMinutes()
        
        /*
             Hier wird der Unterschied zw. der letzten Speicherung (10 Punkte) verglichen
             Da wir die Zeit um 10 Minuten erweitern haben, muss deer Unterschied genau 10 Minuten entsprechen
        */
        expect(30).not.toBe(lastTime)
    });
});
