import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    background: '#009abf',
    height: '38px',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  avatar: {
    margin: 70,
    width: 60,
    height: 30,
    zIndex : 1,
  },
  lineseparator : {
    backgroundPosition: '0 - 15px',
    bottom: '10px',
    content: "",
    display: 'block',
    height: '3px',
    left: '20px',
    position: 'absolute',
    width: '80px',
    zIndex: 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white',
    zIndex: 3,
  },
};

const SearchAppBar = (props) => {

  return (
      <AppBar position="static" color="default" style={styles.root}>
        <Toolbar>
          <img src="https://www.visitcalifornia.com/sites/all/themes/vca/images/logo-visit-california.png" style={styles.avatar} />
          <img src="https://www.visitcalifornia.com/sites/all/themes/vca/images/bg-header.png" style={styles.lineseparator} />
          <IconButton style={styles.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        
      </AppBar>
  );
}


export default SearchAppBar;