import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
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
    }
}
class MainContent extends React.Component{

    render() {
        return(
            <Fragment>
                <Typography style={style.dreamText}>
                    Start dreaming now
                </Typography>
            </Fragment>
        )
    }
};

export default MainContent;