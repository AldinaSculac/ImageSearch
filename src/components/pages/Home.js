import React from 'react';
import Search from '../pics/Search';
import {
  Container,
  VStack
} from "@chakra-ui/react"

const Home = () => {
  return (
    <VStack>
      <Container maxW="container.md" m={6} >
        <Search />
      </Container>
    </VStack>
  )
}

export default Home;