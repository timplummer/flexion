import converter from './converter';

const testValues = {
    cf: 50,
    ck: 283.15,
    cr: 501.66999999999996,
    fc: -12.222222222222223,
    fk: 260.92777777777775,
    fr: 469.67,
    kc: -263.15,
    kf: -441.66999999999996,
    kr: 18,
    rc: -267.5944444444445,
    rf: -449.67,
    rk: 5.555555555555555,
};
describe('converter.js', () => {
    Object.keys(testValues).forEach((key) => {
        it(`should output the correct value for ${key}`, () => {
            const value = converter[key](10);
            expect(value).toEqual(testValues[key]);
        });
    });
});

