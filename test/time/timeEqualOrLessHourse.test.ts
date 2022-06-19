import {fakeLocalStorage} from '../../src/functions/fakeLocalstorage'
import {returnLastTimeExchangePoints, exchangePointsAndSetLastNextExchang} from './timeFunctions'

/**
 * @author b.kotikov
 */

describe('Zeiterfassung in Minuten', () => {

    /*
        Es generiert ein "fake" Localstorage
    */
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
        });
    });

    it('Vergleicht, ob die zuletzt gespeicherte Zeit überschritten wurde oder nicht', () => {

        /*
            Hier wird die Funktion returnLastTimeExchangePoints() aufgerufen,
            in der Funktion wird der lezte Zeitpunkt der letzten Speicherung erfasst
            und in der LocalStorage abgespeichert
        */

        exchangePointsAndSetLastNextExchang(10);
        const lastTime = returnLastTimeExchangePoints().toString();
        

        /*
            Die Zeit, die in der Localstorage gespeichert wurde, 
            wird mit der jetzigen Zeit verglichen.

            Wenn die Zeit kleiner oder gleich ist, wurde die Zeit richtig gespeichert.

            Der nächste Zeitpunkt, wo die Stadt wieder dunkel angezeigt werden soll,
            ist in 10 Punkte * 60000 Millisekunden = 600000 Millisekunden
        */
        expect((new Date().getTime() - (10 * 60000)))
        .toBeLessThanOrEqual((parseInt(lastTime) - (10 *60000)))
    });
});
