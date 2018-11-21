import converter from './converter';

const testValues = {
    cf: 50,
    ck: 283.2,
    cr: 501.7,
    fc: -12.2,
    fk: 260.9,
    fr: 469.7,
    kc: -263.1,
    kf: -441.7,
    kr: 18,
    rc: -267.6,
    rf: -449.7,
    rk: 5.6,
};
describe('converter.js', () => {
    Object.keys(testValues).forEach((key) => {
        it(`should output the correct value for ${key}`, () => {
            const value = converter[key](10);
            expect(value).toEqual(testValues[key]);
        });
    });
});

