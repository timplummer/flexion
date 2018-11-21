import React from 'react';
import { mount } from 'enzyme';
import TempList from './index';
import TempConverter from '../TempConverter';

const items = [
    {
        temp: '',
        unit: '',
        tUnit: '',
        response: '',
        output: ''
    },
    {
        temp: '',
        unit: '',
        tUnit: '',
        response: '',
        output: ''
    },
    {
        temp: '',
        unit: '',
        tUnit: '',
        response: '',
        output: ''
    },
    {
        temp: '',
        unit: '',
        tUnit: '',
        response: '',
        output: ''
    },
    {
        temp: '',
        unit: '',
        tUnit: '',
        response: '',
        output: ''
    }
];
// should output a 5 rows
describe('<TempList />', () => {
      
    it('contains the correct number of children', () => {
        const wrapper = mount(<TempList items={[...items]} />);
        expect(wrapper.find(TempConverter).length).toEqual(items.length);
    });
    
    it('adds pushes a new item to the list', () => {
        const wrapper = mount(<TempList items={[...items]} />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find(TempConverter).length).toEqual(items.length + 1);
    })
});
