import React, { Component } from 'react';
import TempConverter from '../TempConverter';
import { Button, Card, CardActions, CardContent, CardHeader, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const _style = {
    root: {
        maxWidth: '80vw',
        padding: '1vw',
        margin: '3vw auto'
    },
    card: {
        root: {
            padding: '1vw'
        }
    }
}

export class TempList extends Component {
    static defaultProps = {
        items: [
            {
                temp: '',
                unit: '',
                tUnit: '',
                response: '',
                calc: '',
                output: ''
            }
        ]
}
    state = {
        items: this.props.items
    };

    handleChange = (item, key) => {
        let items = [...this.state.items];
        items[key] = item;
        this.setState({items});
    };

    handleAdd = () => {
        const { items } = this.state;
        items.push({
            temp: '',
            unit: '',
            tUnit: '',
            response: '',
            calc: '',
            output: ''
        });
        this.setState({items});
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Card>
                    <CardHeader 
                        title="Temperature Converter"
                        action={
                            <Tooltip 
                                title="Add Row" 
                                children={<Button 
                                    variant="text"
                                    color="primary" 
                                    mini
                                    aria-label="Add"
                                    onClick={this.handleAdd}
                                    children={<Add />} 
                                />}
                            />} 
                        />
                    <CardContent>
                        {this.state.items.map((data, i) => (<TempConverter 
                            key={i}
                            index={i}
                            data={data}
                            onChange={this.handleChange} />))}
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
                </Card>
            </div>);
    }
};

export default withStyles(_style)(TempList);