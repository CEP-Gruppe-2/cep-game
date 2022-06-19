import {getCookie } from '../../src/functions/cookies'
import Cookies from 'js-cookie';

/**
 * @author b.kotikov
 */

jest.mock('js-cookie')

describe('Funktionalität: Cookies', () => {

    it('Die JS-Cookie  Bibliothek soll die get Methode ausführen können', () => {
        // create a mock function using jest.fn()
        const mockSet = jest.fn();

        // here we are trying to mock the 'set' functionality of Cookie
        Cookies.get = mockSet;

        // call the set method of Cookies 
        getCookie("test")
        
        // check if the mock function gets called here
        expect(mockSet).toBeCalled();
    });
});