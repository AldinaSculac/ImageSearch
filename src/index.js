import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
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
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);