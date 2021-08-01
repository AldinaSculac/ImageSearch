import {createTheme} from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: lightBlue[300]
    },
  },
})

export default theme;