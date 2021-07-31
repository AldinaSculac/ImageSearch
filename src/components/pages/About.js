import React from 'react';
import { Box, Center, Image, Heading, Text, List, ListItem, ListIcon, HStack} from "@chakra-ui/react";
import BgImage from '../../assets/bg-image.jpg';
import {ChevronRightIcon} from '@chakra-ui/icons';

const About = () => {
  return (
    <div>About</div>
  )
}

export default About;

/*
<Center w="100%">
      <Box 
        m={5}
        maxW="lg" 
        borderWidth="1px" 
        borderRadius="md" 
        overflow="hidden"
      >
        <Image 
          src={BgImage}
          alt='background-image' 
        />
        <HStack justifyContent="space-between" alignItems="center">
          <Heading 
          as="h1" 
          size="md" 
          paddingInline={2} 
          paddingTop={3}
          color="whiteAlpha.800"
          >
            About Pics App
          </Heading>
          <Text 
            paddingInline={2} 
            fontSize="xs" 
            color="whiteAlpha.500"
          >
            version 1.0
          </Text>
        </HStack>
        <Text padding={2}>
          This is a simple React app made using:
        </Text>
        <List spacing={3} marginBottom={3} paddingInline={3}>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="red.800" />
            useContext and useReducer Hooks
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="red.800" />
            Unsplash API
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="red.800" />
            Chakra UI
          </ListItem>
        </List>
      </Box>
    </Center>
    */