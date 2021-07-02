import {createMuiTheme} from '@material-ui/core/styles';
import {red} from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto'
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#fff'
        },
        secondary: {
            main: 'rgb(26, 145, 218)'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        },
    },
    shadows:  ['none'],
})

export default  theme;
