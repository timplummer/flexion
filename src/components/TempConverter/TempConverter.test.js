import React from 'react';
import { mount } from 'enzyme';
import TempConverter from './index';

const data = {
    'invalid': {
        temp: 10,
        unit: 'f',
        tUnit: '',
        response: 30,
        value: 0,
        output: ''
    },
    'incorrect': {
        temp: 0,
        unit: 'c',
        tUnit: 'f',
        response: 30,
        value: 0,
        output: ''
    },
    'correct': {
        temp: 0,
        unit: 'c',
        tUnit: 'f',
        response: 32,
        value: 0,
        output: ''
    },
};

describe('<TempConverter />', () => {
    Object.keys(data).forEach((key) => {
        let output = ''
        const handleChange = (item) => {
            output = item.output;
        };
        it(`it displays ${key}`, () => {
            mount(<TempConverter data={data[key]} onChange={handleChange} />);
            expect(output).toEqual(key);
        });
    });
});
