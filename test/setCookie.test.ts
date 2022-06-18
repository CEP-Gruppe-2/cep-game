import {setCookieIfNotExist } from '../src/functions/cookies'
import Cookies from 'js-cookie';

/**
 * @author b.kotikov
 */

jest.mock('js-cookie')

describe('Funktionalität: Cookies', () => {

    it('Die JS-Cookie Bibliothek soll die set Methode korrekt ausführen bzw. die set Methode muss ausgeführt werden', () => {
        // create a mock function using jest.fn()
        const mockSet = jest.fn();

        // here we are trying to mock the 'set' functionality of Cookie
        Cookies.set = mockSet;

        // call the set method of Cookies 
        
        setCookieIfNotExist(true, {name: "test", value: "test"})
        
        // check if the mock function gets called here
        expect(mockSet).toBeCalled();
    });
});