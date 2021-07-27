import React, { useState, useContext } from 'react';
import PicContext from '../../context/pic/picContext';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'


const Search = () => {
  const {searchPics, clearPics, pics} = useContext(PicContext);

  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(term === ''){
      console.log('Please enter something');
    } else {
      searchPics(term);
      setTerm('')
    }
  }

  console.log(pics);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormControl id="search"  >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="whiteAlpha.400" />}
          />
          <Input 
            type="text" 
            placeholder="Search..."
            variant="flushed"
            focusBorderColor="red.900"
            value = {term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </InputGroup>
      </FormControl>
      </form>
      
    </div>
  )
}

export default Search;