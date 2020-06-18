import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"0%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        },
        body: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"75%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        },
        footer: {
          backgroundImage: "url(" + `${require("../public/sunset-crop-4.jpg")}` + ")",
          width: "100%",
          height:"25%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover"
        }
      },
      '@media (min-width: 1280px)': {
        MuiTypography: {
          h2: {
            fontSize: '3rem'
          }
        }
      },
      '@media (min-width: 960px)': {
        MuiTypography: {
          h2: {
            fontSize: '2.5rem'
          }
        }
      },
      '@media (min-width: 600px)': {
        MuiTypography: {
          h2: {
            fontSize: '2rem'
          }
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
