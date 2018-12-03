import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    console.log(`props = ${JSON.stringify(props, undefined, 2)}`);
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};
