import React, { Component } from 'react';
import TempConverter from '../TempConverter';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const _style = {
    root: {
        maxWidth: '50vw',
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
    state = {
        items: [{
            temp: '',
            unit: '',
            tUnit: '',
            response: '',
            output: ''
        }]
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
            output: ''
        });
        this.setState({items});
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Temperature Converter
                            </Typography>
                            {this.state.items.map((data, i) => (<TempConverter 
                                key={i}
                                index={i}
                                data={data}
                                onChange={this.handleChange} />))}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button 
                            color="primary" 
                            size="small"
                            onClick={this.handleAdd}>{'Add Converter'}
                        </Button>
                    </CardActions>
                    
                </Card>
                
            </div>);
    }
};

export default withStyles(_style)(TempList);