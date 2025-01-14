import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Container,
  Button
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64,
    padding:0
  },
  flexGrow: {
    flexGrow: 1
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const menus = [
    // {
    //   name:'About Us',
    //   path:'/about',      
    // },
    // {
    //   name:'Courses',
    //   path:'/courses'
    // },
    // {
    //   name:'Volunteers',
    //   path:'/school-register'
    // },
    // {
    //   name:'Students',
    //   path:'/register'
    // },
    // {
    //   name:'Registration',
    //   path:'/register'
    // },
    {
      name:'Events',
      path:'/events'
    },
  ]
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={1}
      {...rest}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
              <RouterLink to="/"  className={classes.flexGrow}>
                <Logo />
              </RouterLink>
              {
                menus.map((menu,index) => (
                  <Button component={RouterLink} to={menu.path} color="primary" key={index}>{menu.name}</Button> 
                ))        
              }
            </Toolbar>
        </Container>          
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
