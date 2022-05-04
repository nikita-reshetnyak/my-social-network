import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
const Header = (props) => {

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  My Social Network
               </Typography>
               {
                  props.isAuth ?
                     <div className ={s.authBlock}>
                        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                           {props.login}
                        </Typography>

                        <Button className ={s.authBlockButton} variant="contained" onClick={props.logout} >Logout</Button>
                     </div>
                     : <NavLink to='/login'>Login</NavLink>
              }

            </Toolbar>
         </AppBar>
      </Box>
     
   )
}
export default Header;
