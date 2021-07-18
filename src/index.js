import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme, colorScheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Link: {
      variants: {
        // you can name it whatever you want
        primary: ({ colorScheme = "whiteAlpha" }) => ({
          color: `${colorScheme}.800`,
          fontWeight:'normal',
          textTransform:'uppercase',
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration:'none',
          },
        }),
      },
      defaultProps: {
        // you can name it whatever you want
        variant: "primary",
      },
    },
  },
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);