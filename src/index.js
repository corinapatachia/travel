import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './components/SearchAppBar';
import BigWall from './components/BigWall';
import MainContent from './components/MainContent';

const Index = () => {
    return (
    <Fragment>
        <SearchAppBar />
        <BigWall />
        <MainContent />
    </Fragment>);
}

ReactDOM.render(<Index />, document.getElementById("index"));
