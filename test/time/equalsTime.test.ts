import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import {returnLastTimeExchangePoints, exchangePointsAndSetLastNextExchang} from './timeFunctions'

describe('Zeiterfassung', () => {

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
    it('Vergleicht zwei Zeiten, ob die miteinander übereinstimmen', () => {

        /*
            Hier wird die Funktion returnLastTimeExchangePoints() aufgerufen,
            in der Funktion wird der lezte Zeitpunkt der letzten Speicherung erfasst
            und in der LocalStorage abgespeichert
        */
        const lastTime = returnLastTimeExchangePoints().toString();
        
        expect(window.localStorage.getItem('lastExchange'))
        .toBe(lastTime.toString());
    });
});

describe('Speicherung der Punkte', () => {

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
    it('Vergleicht zwei Zeiten, ob die miteinander übereinstimmen', () => {

        /*
            Hier wird die Funktion returnLastTimeExchangePoints() aufgerufen,
            in der Funktion wird der lezte Zeitpunkt der letzten Speicherung erfasst
            und in der LocalStorage abgespeichert
        */

        exchangePointsAndSetLastNextExchang(10);
        const lastTime = returnLastTimeExchangePoints().toString();
        
        expect((new Date().getTime() - (10 * 60000)))
        .toBeLessThanOrEqual((parseInt(lastTime) - (10 *60000)))
        //.not((parseInt(lastTime) - (10 *60000)));
    });
});
