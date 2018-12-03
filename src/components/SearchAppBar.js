import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';



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
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     anchorEl: null,
  //     mobileMoreAnchorEl: null,
  //     searchTerm: ''
  //   };

    // this.goToSearchResultsPage = this.goToSearchResultsPage.bind(this);
    // this.handleMenuClose = this.handleMenuClose.bind(this);
    // this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    // this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    // this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
  // }
    searchTermInput = React.createRef();

  // handleProfileMenuOpen(event) {
  //   this.setState({ anchorEl: event.currentTarget });
  // };

  // handleMenuClose() {
  //   this.setState({ anchorEl: null });
  //   this.handleMobileMenuClose();
  // };

  // handleMobileMenuOpen(event) {
  //   this.setState({ mobileMoreAnchorEl: event.currentTarget });
  // };

  // handleMobileMenuClose() {
  //   this.setState({ mobileMoreAnchorEl: null });
  // };

  goToSearchResultsPage(event) {
    event.preventDefault();
    const searchTermCons = this.searchTermInput.value.value;
    console.log(`redirenting to search results page with term ${searchTermCons}`);
    this.props.history.push(`search_results/${searchTermCons}`);
  }

  render() {
    // const { anchorEl, mobileMoreAnchorEl } = this.state;
    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    // const renderMenu = (
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMenuOpen}
    //     onClose={this.handleMenuClose}
    //   >
    //   </Menu>
    // );
    // const renderMobileMenu = (
    //   <Menu
    //     anchorEl={mobileMoreAnchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMobileMenuOpen}
    //     onClose={this.handleMobileMenuClose}
    //   >
    //   </Menu>
    // );


    return (
      <AppBar position="static" color="default" style={styles.root}>
        <Toolbar>
          <img src="https://www.visitcalifornia.com/sites/all/themes/vca/images/bg-header.png" style={styles.lineseparator} />
          <IconButton style={styles.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography style={styles.title} variant="h6" color="textPrimary" noWrap>
            Travel. Enjoy life.
            </Typography>
          <div style={styles.search}>
            <div style={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Video"
              // value={this.state.searchTerm}
              ref={this.searchTermInput}
              onChange={this.goToSearchResultsPage}
            />
          </div>
        </Toolbar>

      </AppBar>
    );
  }
}


export default SearchAppBar;