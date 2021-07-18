import React from 'react';
import PropTypes from 'prop-types';
import { VStack, HStack, Text, Spacer, Link as ChakraLink} from '@chakra-ui/react';
import {NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
  const {title} = props;
  return (
    <VStack
      bgColor="cyan.700"
      alignItems="stretch"
      p="4"
      boxShadow="md"
    >
      <HStack >
        <Text
          color="whiteAlpha.800"
          fontSize="2xl"
          fontWeight="medium"
        >
          <NavLink to='/'>{title}</NavLink>
        </Text>
        <Spacer />
        <ChakraLink
          pr={4}
        >
          <NavLink 
            to='/'
            exact={true}
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            Home</NavLink>
        </ChakraLink>
        <ChakraLink
          pr={4}
        >
          <NavLink 
            to='/about'
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            About</NavLink>
        </ChakraLink>
      </HStack>
    </VStack>
  )
}

Navbar.defaultProps = {
  title:'Pics App',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;