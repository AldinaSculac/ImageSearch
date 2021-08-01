import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    margin: 20
  },
  media: {
    height: 300,
  },
  icon:{
    marginLeft: 'auto',
  },
  iconLink:{
    transform: 'rotate(-45deg)',
    marginLeft: 'auto',
  },
  link: {
    color: '#01cff7',
  },
  likeIcon: {
    color: '#d46ab5'
  }
});


const PicItem = (props) => {

  const {pic} = props;
  const classes = useStyles();

  return (
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={pic.urls.regular}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {pic.user.first_name} {pic.user.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link href={pic.user.links.html} target="_blank" rel="noopener" className={classes.link}>@{pic.user.username}</Link>
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="visit page" className={classes.iconLink} href={pic.urls.regular} target="_blank" rel="noopener">
            <LinkIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" className={classes.icon} 
          //onClick={() => setLiked(!liked)}
          >
            <FavoriteIcon 
            //className={liked ? classes.likeIcon : ''}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PicItem;