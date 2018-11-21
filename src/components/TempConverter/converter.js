const toImperial = (9/5);
const toMetic = (5/9);
const rankine = 459.67;
const metric = 273.15;
const imperial = 32;

export const converter = {
    'fc': (v) => ((v - imperial) * toMetic),
    'fk': (v) => ((v - imperial) * toMetic + metric),
    'fr': (v) => (v + rankine),
    'cf': (v) => ((v * toImperial) + imperial),
    'ck': (v) => (v + metric),
    'cr': (v) => (v + metric * toImperial),
    'kf': (v) => ((v - metric) * toImperial + imperial),
    'kc': (v) => (v - metric),
    'kr': (v) => (v * toImperial),
    'rf': (v) => (v - rankine),
    'rc': (v) => ((v - (rankine+imperial)) * toMetic),
    'rk': (v) => (v * toMetic),
};

export const generateTestValues = Object.keys(converter).reduce((acc, cur) => ({ 
    ...acc, 
    [cur]: converter[cur](10)
}), {});

export default converter;