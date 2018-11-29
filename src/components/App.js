import React, { Fragment } from 'react';
import SearchAppBar from './SearchAppBar';
import BigWall from './BigWall';
import MainContent from './MainContent';

const App = () => {
    return (
    <Fragment>
        <SearchAppBar />
        <BigWall />
        <MainContent />
    </Fragment>);
};

export default App;