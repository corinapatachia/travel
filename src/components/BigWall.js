import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const topImage = '../../style/images/leVall.jpeg';
const style = {
    zepic: {
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 100%',
        height: '800px',
        position: 'relative',
        // width: '120%',
        maxWidth: '1280px',
        bottom: '7vw',
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


const BigWall = () => {
    return (
       <Fragment>
            <div style={style.zepic} />
       </Fragment>

    )

}

export default BigWall;