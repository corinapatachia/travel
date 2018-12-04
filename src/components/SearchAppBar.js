import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



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
  constructor(props){
    super(props);

    this.state={
      searchTerm: ''
    }
    this.searchTermInput= React.createRef();
    this.goToSearchResultsPage = this.goToSearchResultsPage.bind(this);
  }
  // searchTermInput= React.createRef();

  goToSearchResultsPage(event) {
    event.preventDefault();
    const searchTermCons = this.searchTermInput.value.value;
    // const searchTermCons = this.state.searchTerm;
    this.props.history.push(`search_results/${searchTermCons}`);
    console.log(searchTermCons);
  }

  render() {

    return (
      <AppBar position="static" color="default" style={styles.root}>
        <Toolbar>
          <img src="https://www.visitcalifornia.com/sites/all/themes/vca/images/bg-header.png" style={styles.lineseparator} />
          <IconButton style={styles.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div style={styles.search}>
            <div style={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Video"
              // value={this.state.searchTerm}
              ref={this.searchTermInput}
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
        </Toolbar>

      </AppBar>
    );
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}


export default SearchAppBar;