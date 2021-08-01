import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  cover: {
    width: '50%',
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  chipReact: {
    margin: 3,
    color: '#01cff7',
  },
  chipMaterial: {
    margin: 3,
    color: '#d46ab5'
  },
  chipUnsplash: {
    margin: 3,
    color: '#ff7101'
  },
}));


const About = () => {
  const classes = useStyles();

  return (
    <Grid item container>
      <Grid xs={false} sm={2} md={3} item/>
      <Grid xs={12} sm={8} md={6} item>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Simple Image Search App
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                This app is made using React, Material UI & Unsplash API.
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Chip 
                variant="outlined"
                size="small" 
                label="React JS" 
                clickable 
                className={classes.chipReact} 
                onClick={()=> window.open("https://reactjs.org/", "_blank")}
              />
              <Chip 
                variant="outlined"
                size="small" 
                label="Material UI" 
                clickable 
                className={classes.chipMaterial} 
                onClick={()=> window.open("https://material-ui.com/", "_blank")}
              />
              <Chip 
                variant="outlined"
                size="small" 
                label="Unsplash API" 
                clickable 
                className={classes.chipUnsplash} 
                onClick={()=> window.open("https://unsplash.com/developers", "_blank")}
              />
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Simple Image Search App"
          />
        </Card>
      </Grid>
      <Grid xs={false} sm={2} md={3} item/>
    </Grid>
  )
}

export default About;