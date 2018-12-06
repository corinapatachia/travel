import React from 'react';
import { Typography } from '@material-ui/core';

const topImage = '../../style/images/leVall.jpeg';
const style = {
    zepic: {
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'center',
        backgroundPosition: '80% 80%',
        display: 'block',
        height: '45vw',
        maxWidth: '100vw',
    },
    scrolltext: {
        color: 'white',
        height: '50px',
        width: '100%',
        position: 'absolute',
        marginTop:'30vw',
        marginLeft: '56vw',
    },
    imgscroll: {
        height: '50%',
        display: 'block',
    }
};

const BigWall = () => {
    return (
            <div style={style.zepic} >
            <Typography variant='h6' style={style.scrolltext}>
                SCROLL TO DISCOVER <img 
                src="http://www.wordapp.io/wpsite/wp-content/uploads/2016/11/white-arrow-down.png"
                style={style.imgscroll} />
            </Typography>
            </div>
    )
}

export default BigWall;