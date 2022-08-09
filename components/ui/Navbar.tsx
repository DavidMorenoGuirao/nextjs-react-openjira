import { useContext, useState } from 'react';
import NextLink from 'next/link';

import { AppBar, Toolbar, IconButton, Typography, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { UIContext } from '../../context/ui';
// import { toggleTheme } from '../../pages/_app';


export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext );
  // const [changeTheme , setchangeTheme ] = useState(false);


  return (
    <AppBar position='sticky'>

        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <IconButton
                sx={{ position: 'absolute', left: 12 }}
                size='large'
                edge='start'
                onClick={ openSideMenu }
            >
                <MenuOutlinedIcon />
            </IconButton>

            <NextLink href='/' passHref>
              <Link underline='none' color='white' sx={{ marginLeft: 3 }}>
                <Typography variant='h6'>OpenJira</Typography>
              </Link>
            </NextLink>

            <IconButton                
                edge='end'
                size='large'
                // onClick= { toggleTheme }
            >
              <SettingsBrightnessOutlinedIcon />
            </IconButton>
        </Toolbar>

    </AppBar>
  )
};
