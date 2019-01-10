import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchAppBar from './SearchAppBar';

const styles = {
    root: {
        paddingTop: '20vw',
        paddingBottom: '20vw',
    },
};


const TripDescprion = () => {

    return (
        <React.Fragment>
            <SearchAppBar />
            <Paper style={styles.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        </React.Fragment>
    );
};


export default TripDescprion;