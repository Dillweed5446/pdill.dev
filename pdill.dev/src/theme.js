import { createMuiTheme } from '@material-ui/core/styles'
// import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#143642'
    },
    secondary: {
      main: '#0F8B8D'
    },
    error: {
      main: '#A8201A'
    },
    background: {
      default: '#DAD2D8'
    },
    warning: {
      main: '#EC9A29'
    },
    info: {
      main: '#A06CD5'
    },
    success: {
      main: '#20A4F3'
    }
  }
})

export default theme
