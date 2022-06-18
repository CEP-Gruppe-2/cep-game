import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import {exchangePointsAndSetLastNextExchang, getLastTimeExchangeDays} from './timeFunctions'

/**
 * @author b.kotikov
 */

const punkte : number = 10;

describe('Zeitunterschied in Tagen', () => {

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
    it('Vergleicht den Unterschied zw. zwei verschiedenen Zeiten in Tagen', () => {

        /*
            Hier wird die Funktion exchangePointsAndSetLastNextExchang() aufgerufen,
            in der Funktion wird der lezte Zeitpunkt der letzten Speicherung erfasst und
            um weitere 10 Minuten erweitert. Danach wird die Zeiten in der LocalStorage abgespeichert
        */

        exchangePointsAndSetLastNextExchang(punkte);
        const lastTime = getLastTimeExchangeDays()
        
        /*
             Hier wird der Unterschied zw. der letzten Speicherung (10 Punkte) verglichen
             Da wir die Zeit um 10 Minuten erweitern haben, muss deer Unterschied genau 0 Tagen entsprechen
        */
        expect(0).toBe(lastTime)
    });
});
