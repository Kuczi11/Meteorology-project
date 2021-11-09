import React from 'react';
import {
  AppBar, Toolbar, InputBase, IconButton,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbarContainer}>
      <AppBar position="static">
        <Toolbar className={classes.navbarToolbar}>
          <div className={classes.navbarLogo}>
            <WbSunnyIcon className={classes.navbarSunIcon} />
            <h4>WeatherApp</h4>
          </div>
          <div className={classes.navbarSearch}>
            <IconButton><SearchIcon /></IconButton>
            <InputBase placeholder="Search..." />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
