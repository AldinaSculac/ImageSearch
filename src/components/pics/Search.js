import React, { useState, useContext } from 'react';
import PicContext from '../../context/pic/picContext';
import { makeStyles } from '@material-ui/core/styles';
import {TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBlock: 20,
    marginInline: 20
  },
  inputField:{
    color:'#01cff7'
  }
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
      setTerm('');
      setIsError(false);
    }
  }

  console.log(pics);

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
      />
    </form>
  )
}

export default Search;