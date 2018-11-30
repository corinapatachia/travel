// import React from 'react';
// import { Typography } from '@material-ui/core';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

// const style = {
//     root: {
//         backgroundColor: '#fff',
//         margin: '0 5.20833%',
//         padding: '40px 20px 0 20px',
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//     },

//     storyTitle: {
//         color: '#009abf',
//         fontSize: '22px',
//         fontWeight: 'normal',
//         lineHeight: '1.1875em',
//     },
//     titleBar: {
//         background:
//             'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
//     imgStyle: {
//         width: '350px',
//         height: '200px'
//     },
//     icon: {
//         color: 'rgba(255, 255, 255, 0.54)',
//       },
// }

// class Story extends React.Component {
//     render() {
//         const currentStory = this.props.details;
//         return (
//             <GridListTile key={currentStory.title}>
//                 <img src={currentStory.photoSrc} alt={currentStory.title}  style={style.imgStyle}/>
//                 <GridListTileBar
//                     title={currentStory.title}
                    
//                     actionIcon={
//                         <IconButton style={style.icon}>
//                             <InfoIcon style={style.storyTitle} />
//                         </IconButton>
//                     }
//                 />
//             </GridListTile>
//         )
//     }
// }

// export default Story;