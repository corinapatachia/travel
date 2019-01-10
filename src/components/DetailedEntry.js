import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      paddingTop: '20vw',
      paddingBottom: '20vw',
    },
  };


const DetailedEntry = () => {
    return (
        <div>
            <Paper style={styles} elevation={1}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
            </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
            </Typography>
            </Paper>
        </div>
    );

}

export default DetailedEntry;