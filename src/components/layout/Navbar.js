import React from 'react';
import PropTypes from 'prop-types';
import {NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    textTransform:'uppercase',
    marginRight: 20,
    textDecoration: 'none',
    fontFamily:'Roboto',
    color: '#FFFFFF90'
  },
}));

const Navbar = (props) => {
  const {title} = props;
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <NavLink 
            to='/'
            exact={true}
            activeStyle={{
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: '#FFFFFF'
            }}
            className={classes.link}
          >
            Home
          </NavLink>

          <NavLink 
            to='/about'
            activeStyle={{
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: '#FFFFFF'
            }}
            className={classes.link}
          >
            About
          </NavLink>
        </Toolbar>
      </AppBar>
  )
}

Navbar.defaultProps = {
  title:'Pics App',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;