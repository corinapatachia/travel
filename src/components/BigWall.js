import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const topImage = '../../style/images/leVall.jpeg'
const style = {
    zepic: {
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -204px',
        height: '800px',
        width: '80%%',
    },
    scrolltext: {
        color: 'white',
        height: '50px',
        width: '100%',
        display: 'block',
        position: 'absolute',
        marginTop:'-150px',
        marginLeft: '50%',
    },
    imgscroll: {
        height: '50%',
        width: '5%',
        display: 'block',
    }
};


const BigWall = (props) => {
    return (
       <Fragment>
            <div style={style.zepic} />
            <Typography variant='h6' style={style.scrolltext}>
                SCROLL TO DISCOVER
                <img 
                src="http://www.wordapp.io/wpsite/wp-content/uploads/2016/11/white-arrow-down.png"
                style={style.imgscroll} />
            </Typography>
       </Fragment>

    )

}

export default BigWall;