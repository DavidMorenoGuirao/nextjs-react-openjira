import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';



export const lightTheme = createTheme ({

    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#4a148c'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    },
    //Con el component podemos modificar todos los elementos de material-ui
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            }            
        },
     } 
});