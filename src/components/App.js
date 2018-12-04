import React, { Fragment, Component } from 'react';
import SearchAppBar from './SearchAppBar';
import BigWall from './BigWall';
import MainContent from './MainContent';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetails';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyAnuwmbt9MvvHSxE0_ZZSu4HVswhM0vnSs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            showVideos: false,
        };

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
                showVideos: true
            });
        });
    }
    render() {
        const { showVideos } = this.state.showVideos;
        return (
            !this.state.showVideos ?
                <Fragment>
                    <SearchAppBar onSearchTermChange={term => this.videoSearch(term)} />
                    <BigWall />
                    <MainContent />
                </Fragment> : <Fragment>
                    <SearchAppBar />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos} />
                </Fragment>


        );
    }
}

export default App;