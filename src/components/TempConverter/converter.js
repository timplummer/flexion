const toImperial = (9/5);
const toMetic = (5/9);
const rankine = 459.67;
const metric = 273.15;
const imperial = 32;

const round = (value) => (Math.round(value*10)/10);

export const converter = {
    'fc': (v) => round((v - imperial) * toMetic),
    'fk': (v) => round((v - imperial) * toMetic + metric),
    'fr': (v) => round(v + rankine),
    'cf': (v) => round((v * toImperial) + imperial),
    'ck': (v) => round(v + metric),
    'cr': (v) => round(v + metric * toImperial),
    'kf': (v) => round((v - metric) * toImperial + imperial),
    'kc': (v) => round(v - metric),
    'kr': (v) => round(v * toImperial),
    'rf': (v) => round(v - rankine),
    'rc': (v) => round((v - (rankine+imperial)) * toMetic),
    'rk': (v) => round(v * toMetic),
};

export const generateTestValues = Object.keys(converter).reduce((acc, cur) => ({ 
    ...acc, 
    [cur]: converter[cur](10)
}), {});

export default converter;