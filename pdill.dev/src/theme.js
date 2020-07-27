import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { withImages } from '../next.config'

const sunset = withImages(require('../public/sunset-crop-4.jpg'))

// Create a theme instance.
let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundImage: "url(" + `${sunset}` + ")",
          width: "100%",
          height:"0%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        },
        body: {
          backgroundImage: "url(" + `${sunset}` + ")",
          width: "100%",
          height:"75%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        },
        footer: {
          backgroundImage: "url(" + `${sunset}` + ")",
          width: "100%",
          height:"25%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        }
      }
    },
    MuiTypography: {
      root: {
        paddingBottom: '2%'
      }
    },
    MuiGrid: {
      item: {
        backgroundColor: 'darkGrey',
        padding: '1%',
        border: '.5em #20A4F3 double',
        borderRadius: '1em',
        textAlign: 'center'
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: '3rem'
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
}
)

theme = responsiveFontSizes(theme)

export default theme
