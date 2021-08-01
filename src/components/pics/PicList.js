import React, { useContext } from 'react';
import PicContext from '../../context/pic/picContext';
import {Grid, CircularProgress, Typography } from '@material-ui/core';
import PicItem from './PicItem';

const PicList = () => {
  const {pics, loading, alertMsg} = useContext(PicContext);

  if (loading) {
    return (
      <div style={{ padding: '10%' }}>
        <Grid container 
            alignItems="center" 
            justifyContent="center"
          >
          <CircularProgress color="primary" />
        </Grid>
      </div>);
  } else {
    return (
      <Grid container justifyContent="center">
        {alertMsg ? <Typography>{alertMsg}</Typography>
        :
        pics.map(pic => (
          <PicItem key={pic.id} pic={pic} />
        ))
        }
      </Grid>
    );
  }
}

export default PicList;