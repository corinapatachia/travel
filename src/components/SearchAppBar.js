import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CustomMenu from './CustomMenu';



const styles = {
  root: {
    flexGrow: 1,
    background: '#009abf',
    height: '68px',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  lineseparator: {
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
  searchIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: '50%',
    backgroundColor: '#009abf',
    '&:hover': {
      backgroundColor: '#fff',
    },
    marginRight: '3vw',
    marginLeft: '70vw',
    width: '30%',
  },
};

class SearchAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.searchTermInput = React.createRef();
    this.state = {
      term: ''
    }

    this.handleInputUpdate = this.handleInputUpdate.bind(this);

  }

  handleInputUpdate(event) {
    console.log(event.currentTarget.value);
  }

  render() {

    return (
      <AppBar position="static" color="default" style={styles.root}>
        <Toolbar>
          <img src="https://www.visitcalifornia.com/sites/all/themes/vca/images/bg-header.png" style={styles.lineseparator} />
          {/* <CustomMenu redirectToSearchPage = {this.props.redirectToSearchPage}/> */}
          <div style={styles.search}>
            <div style={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Video"
              ref={this.searchTermInput}
              value={this.state.term}
              // onChange={event => this.props.redirectToSearchPage(event.target.value)}
              onChange={event => this.handleInputUpdate(event)}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  };
};

export default SearchAppBar;

