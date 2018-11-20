import React, {Component} from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const _style = (theme) => ({
    root: {
        paddingBottom: '1vw',
        display: 'flex',
    },
    field: {
        flexGrow: '1',
        margin: '0 1vw'
    }
});

export class TempConverter extends Component {
    state = {
        data: this.props.data,
        units: [
            {
                label: 'Celsius',
                value: 'c',
                calc: 1
            },
            {
                label: 'Farenheit',
                value: 'f',
                calc: 2
            },
            {
                label: 'Kelvin',
                value: 'k',
                calc: 3
            },
            {
                label: 'Rankine',
                value: 'r',
                calc: 4
            },
        ]
    }

    handleChange = (event) => {
        const { index, data, onChange } = this.props;
        const { name, value } = event.target;
        const newData = {...data, [name]: value};
        console.log('NewData', newData);
        const calc = this.handleCalc(newData);
        console.log('Calc', calc, 'Index', index);
        onChange(calc, index);
    }

    handleCalc = (data) => {
        const { response, temp, tUnit, unit } = data;
        
        return { ...data, output: (response && temp && tUnit && unit) ? 'true' : 'false' };
    }

    render() {
        return (<div className={this.props.classes.root}>
            <TextField 
                name="temp" 
                label="Temperature"
                value={this.props.data.temp} 
                onChange={this.handleChange}
                className={this.props.classes.field} />
            <TextField 
                name="unit" 
                label="Unit"
                value={this.props.data.unit} 
                select
                onChange={this.handleChange}
                className={this.props.classes.field}
                children={this.state.units.map((unit, i) => (
                    <MenuItem key={i} value={unit.value}>
                        {unit.label}
                    </MenuItem>
                ))} />
            <TextField 
                name="tUnit" 
                label="Target"
                value={this.props.data.tUnit} 
                select
                onChange={this.handleChange}
                className={this.props.classes.field}
                children={this.state.units.map((unit, i) => (
                    <MenuItem key={i} value={unit.value}>
                        {unit.label}
                    </MenuItem>
                ))} />
            <TextField 
                name="response" 
                label="Response"
                value={this.props.data.response} 
                onChange={this.handleChange}
                className={this.props.classes.field} />      
            <TextField 
                name="output" 
                label="Output"
                disabled={true}
                value={this.props.data.output}
                className={this.props.classes.field}  />
        </div>);
    }
}
    
export default withStyles(_style)(TempConverter);