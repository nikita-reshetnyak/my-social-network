
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';



const Navbar = (props) => {

   return (
      <Box className={s.navbar} sx={{ width: '100%', height: '100%' }}>

         <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton >
               <NavLink className={s.navlink} activeClassName={s.activeLink} to="/profile"  >Profile</NavLink>
            </ListItemButton>
            <ListItemButton>
               <NavLink className={s.navlink} activeClassName={s.activeLink} to="/dialogs"  >Message</NavLink>
            </ListItemButton>
            <ListItemButton>
               <NavLink className={s.navlink} activeClassName={s.activeLink} to="/users"  >Users</NavLink>
            </ListItemButton>
            <ListItemButton>
               <NavLink className={s.navlink} activeClassName={s.activeLink} to="/news"  >News</NavLink>
            </ListItemButton>
            <ListItemButton>
               <NavLink className={s.navlink} activeClassName={s.activeLink} to="/music"  >Music</NavLink>
            </ListItemButton>
         </List>
      </Box>

   )
}
export default Navbar;