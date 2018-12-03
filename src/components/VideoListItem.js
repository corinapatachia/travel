import React from 'react';

const VideoListItem = ({ video , onVideoSelect}) => {
    // {video} is the new sintax for : cont video = props.video;
    const imageURL = video.snippet.thumbnails.default.url;
    
    // console.log(video);
    return <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageURL}></img>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>

    </li>
};