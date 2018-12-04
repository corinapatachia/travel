import React from 'react';
import SearchAppBar from './SearchAppBar';
import { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <SearchAppBar />
            <p>OOPS you are trying to get a page that does not exist</p>
        </Fragment>
    )
}

export default NotFound;