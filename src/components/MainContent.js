import React, { Fragment } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import sampleStories from '../../data/data';
import Story from './Story';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const style = {
    root: {
        backgroundColor: '#fff',
        margin: '0 5.20833%',
        padding: '40px 20px 0 20px',
    },
    dreamText: {
        color: '#d08a00',
        fontSize: '32px',
        fontWeight: 'normal',
        lineHeight: '1.1875em',
        textTransform: 'uppercase',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}
class MainContent extends React.Component {

    constructor() {
        super();
        this.state = {
            stories: {}
        };
    }
    componentDidMount() {
        this.setState({
            stories: sampleStories
        });
    }
    render() {
        return (
            <Fragment>
                <Typography style={style.dreamText}>
                    Start dreaming now
                </Typography>
                <GridList style={style.gridList} cols={2.5}>
                    {Object.keys(this.state.stories).map(key => <Story key={key} details={this.state.stories[key]} />)}
                </GridList>
            </Fragment>
        )
    }
};

export default MainContent;