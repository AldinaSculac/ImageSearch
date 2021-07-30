import React from 'react';
import Search from '../pics/Search';
import {
  Container,
  VStack
} from "@chakra-ui/react";
import PicList from '../pics/PicList';

const Home = () => {

  return (
    <VStack>
      <Container maxW="container.md" m={6} >
        <Search />
      </Container>
      <Container maxW="container.xl" m={6} centerContent>
        <PicList />
      </Container>
    </VStack>
  )
}

export default Home;