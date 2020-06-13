import { createMuiTheme } from '@material-ui/core/styles'
import { Sunset } from '../public/ocean-sunset.jpg'

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundImage: "Sunset",
          width: "100%",
          height:"640px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      }
    }
  },
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
