import React from 'react';
import Search from '../pics/Search';
import {Grid} from '@material-ui/core';
import PicList from '../pics/PicList';

const Home = () => {

  return (
    <Grid 
      item 
      container 
      //alignItems="center" 
      //justifyContent="center"
    >
      <Grid xs={false} sm={2} item />
      <Grid xs={12} sm={8} item >
        <Search />
        <PicList />
      </Grid>
      <Grid xs={false} sm={2} item />
    </Grid>
  )
}

export default Home;