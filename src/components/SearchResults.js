import React, { Fragment } from 'react';
import SearchAppBar from './SearchAppBar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetails';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyAnuwmbt9MvvHSxE0_ZZSu4HVswhM0vnSs';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            term: this.props.match.params.searchTermConst
        };
    }
    componentDidUpdate(){
        const searchTermConst = this.state.term;
        this.videoSearch(searchTermConst);
    }

    videoSearch(givenTerm) {
       
        YTSearch({ key: API_KEY, term: givenTerm }, (videos) => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0],
                term: givenTerm
            });
        });
    }
    render() {
        return (
            <Fragment>
                <SearchAppBar redirectToSearchPage={this.redirectToSearchPage}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </Fragment>
        )
    }
}

export default SearchResults;