import React from 'react';
import SearchAppBar from './SearchAppBar';
import { Fragment } from 'react';


const style = {
    paper: {
        backgroundColor: '#fff',
        margin: '0 5.20833%',
        padding: '40px 20px 0 20px',
        marginTop: '-5vw',
        backgroundSize: 'center',
        backgroundPosition: '80% 80%',
        display: 'block',
        height: '45vw',
        maxWidth: '100vw',
    }
}
const NotFound = () => {
    return (
        <Fragment>
        <SearchAppBar />
            <img style={style.paper} src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.innovationsquare.com.au%2Fimages%2Fcss%2FPage-404-new.jpg&f=1" />
        </Fragment>
    )
}

export default NotFound;