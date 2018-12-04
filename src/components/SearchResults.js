import React, { Fragment } from 'react';
import SearchAppBar from './SearchAppBar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetails';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyAnuwmbt9MvvHSxE0_ZZSu4HVswhM0vnSs';

class SearchResults extends React.Component{
    constructor(props){
        super(props); 

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('bigar');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
render(){
    return(
        <Fragment>
            <SearchAppBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
        </Fragment>
    )
}
}

export default SearchResults;