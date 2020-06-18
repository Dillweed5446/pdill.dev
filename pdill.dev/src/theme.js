import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"0%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        body: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"75%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        footer: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"25%",
          backgroundRepeat: "no-repeat",
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
        padding: 'inherit',
        border: '.5em #20A4F3 double',
        borderRadius: '.1em',
        textAlign: 'center'
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

export default theme
