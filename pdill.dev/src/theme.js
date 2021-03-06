import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
let theme = createMuiTheme({
  overrides: {
    // MuiCssBaseline: {
    //   '@global': {
    //     html: {
    //       backgroundImage: "url(" + `${require("../public/ocean.jpg")}` + ")",
    //       width: "100%",
    //       height:"0%",
    //       backgroundRepeat: "repeat",
    //       backgroundSize: "cover"
    //     },
    //     body: {
    //       backgroundImage: "url(" + `${require("../public/ocean.jpg")}` + ")",
    //       width: "100%",
    //       height:"75%",
    //       backgroundRepeat: "repeat",
    //       backgroundSize: "cover"
    //     },
    //     footer: {
    //       backgroundImage: "url(" + `${require("../public/ocean.jpg")}` + ")",
    //       width: "100%",
    //       height:"25%",
    //       backgroundRepeat: "repeat",
    //       backgroundSize: "cover"
    //     }
    //   }
    // },
    MuiTypography: {
      root: {
        paddingBottom: '2%'
      }
    },
    MuiSelect: {
      selectMenu: {
        minHeight: '2em'
      }
    },
    MuiTablePagination: {
      item: {
        height: '1.5rem',
        minWidth: '2rem'
      }
    },
    MuiButton: {
      root: {
        color: '#DAD2D8',
        fontSize: '3rem'
      }
    },
    MuiGrid: {
      item: {
        backgroundColor: 'darkGrey',
        padding: '1%',
        border: '.5em #20A4F3 double',
        borderRadius: '1em',
        textAlign: 'center',
        margin: '.5rem'
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
      main: '#143642' // Blue whale, very dark blue
    },
    secondary: {
      main: '#0F8B8D' // dark cyan, lighter blue/teal
    },
    error: {
      main: '#5B3000' // bakers chocolate, brown
    },
    background: {
      default: '#DAD2D8' // thistle, light purple/lavender
    },
    warning: {
      main: '#EC9A29' // firebush, orange
    },
    success: {
      main: '#280003' // rustic red, dark maroon
    }
  }
}
)

theme = responsiveFontSizes(theme)

export default theme
