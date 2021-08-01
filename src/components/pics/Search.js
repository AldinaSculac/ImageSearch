import React, { useState, useContext } from 'react';
import PicContext from '../../context/pic/picContext';
import { Icon, makeStyles, InputAdornment, TextField} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBlock: 20,
    marginInline: 20
  },
  inputField:{
    color:'#01cff7'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Search = () => {
  const classes = useStyles();
  const {searchPics, clearPics, pics} = useContext(PicContext);

  const [term, setTerm] = useState('');
  const [isError, setIsError] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(term === ''){
      //console.log('Please enter something');
      setIsError(true);
    } else {
      searchPics(term);
      //setTerm('');
      setIsError(false);
    }
  }

  const clearBtn = () => {
    setTerm('');
    if(pics){
      clearPics();
    }
  }

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <TextField
        fullWidth
        id="standard-basic" 
        label="Search For Image" 
        error={isError}
        value = {term}
        onChange={(e) => setTerm(e.target.value)}
        className={classes.inputField}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon 
                aria-label="clean search field"
                style={{cursor:'pointer'}}
                fontSize="small"
                onClick={clearBtn}
              >
                {term ? <CloseIcon /> : null}
              </Icon>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}

export default Search;
/*
<TextField 
        fullWidth
        id="standard-basic" 
        label="Search For Image" 
        error={isError}
        value = {term}
        onChange={(e) => setTerm(e.target.value)}
        className={classes.inputField}
      />
      <p>Clean</p>
      */