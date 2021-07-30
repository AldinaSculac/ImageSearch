import React, { useContext } from 'react';
import PicContext from '../../context/pic/picContext';
import PicItem from './PicItem';
import { Spinner } from "@chakra-ui/react";
import {
  Container,
  VStack,
  Grid, 
} from "@chakra-ui/react";

const PicList = () => {
  const {pics, loading} = useContext(PicContext);

  if (loading) {
    return (<VStack>
      <Container maxW="container.md" m='20%' centerContent={true}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="whiteAlpha.400"
          color="red.900"
          size="xl"
        />
      </Container>
    </VStack>);
  } else {
    return (
      <Grid
        templateColumns="repeat(3, 1fr)" gap={6}
      >
        {pics.map(pic => (
          <PicItem key={pic.id} pic={pic} />
        ))}
      </Grid>
    );
  }
}

export default PicList;