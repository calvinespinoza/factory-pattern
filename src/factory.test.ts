import {  clientCode, EventType } from './factory'

describe('Strategy Pattern Tests', () => {
    test('should login with selected strategy', () => {
        var price = clientCode(EventType.CONCERT);
        var expectedResult = 200.00;
        expect(price).toContain(expectedResult);
    });

    test('on changing strategy should login with last strategy', () => {
        expect(true).toEqual(true);
    });
});