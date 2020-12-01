import {  clientCode, EventType } from './factory'

describe('Factory Pattern Tests', () => {
    test('should return correct price for concert ticket', () => {
        var price = clientCode(EventType.CONCERT);
        var expectedPrice = 200.00;
        expect(price).toContain(expectedPrice);
    });

    test('should return correct price for gaming event ticket', () => {
        var price = clientCode(EventType.GAMING);
        var expectedPrice = 120.00;
        expect(price).toContain(expectedPrice);
    });

    test('should return correct price for party ticket', () => {
        var price = clientCode(EventType.PARTY);
        var expectedPrice = 50.00;
        expect(price).toContain(expectedPrice);
    });
});