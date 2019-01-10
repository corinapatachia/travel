import React, { Fragment, Component } from 'react';
import SearchAppBar from './SearchAppBar';
import BigWall from './BigWall';
import MainContent from './MainContent';

class App extends Component {
        constructor(props) {
                super();

                this.state = {
                        searchTerm: ''
                }
                this.redirectToSearchPage = this.redirectToSearchPage.bind(this);
        }

        redirectToSearchPage(searchTerm) {
                // console.log(`searchTerm from App.js is called with the term ${searchTerm}`);
                this.setState({ searchTerm });
                this.props.history.push(`search_results/${searchTerm}`);
        }
        render() {
                return (
                        <Fragment>
                                <SearchAppBar redirectToSearchPage={this.redirectToSearchPage} />
                                <BigWall />
                                <MainContent />
                        </Fragment>
                );
        }

}

export default App;