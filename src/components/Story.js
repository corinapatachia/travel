import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const style = {
    root: {
        backgroundColor: '#fff',
        margin: '0 5.20833%',
        padding: '40px 20px 0 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },

    storyTitle: {
        color: '#009abf',
        fontSize: '22px',
        fontWeight: 'normal',
        lineHeight: '1.1875em',
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width: '350px',
        height: '200px',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}

class Story extends React.Component {
    constructor() {
        super();
        this.state = {
            favouriteColor: 'grey'
        };
    };

    handleFavouriteClick(e) {
        e.preventDefault();
        this.setState({
            favouriteColor: 'red'
        });
    };
    handleShareClick(e) {
        e.preventDefault();
        alert('you are shering this');
    };

    render() {
        const currentStory = this.props.details;
        return (
            <Card style={style.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label={currentStory.title} style={style.avatar}> {currentStory.avatarLetter}</Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={currentStory.title}
                />
                <CardMedia
                    style={style.media}
                    image={currentStory.photoSrc}
                    title={currentStory.title}
                />
                <CardContent>
                    <Typography component="p">
                        {currentStory.desc}
                    </Typography>
                </CardContent>
                <CardActions style={style.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon onClick={this.handleFavouriteClick}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon onClick={this.handleShareClick}/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default Story;