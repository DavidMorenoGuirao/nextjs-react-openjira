import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const darkTheme = createTheme ({
    palette: {
        mode: 'dark',
        
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    },
    //Con el component podemos modificar todos los elementos de material-ui
    components: {
        MuiAppBar: { //Modificamos el AppBar (navbar)
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root:{
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
});