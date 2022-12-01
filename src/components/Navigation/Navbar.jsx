import { Link, Navigate } from 'react-router-dom'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { mainNavbarItems } from '../consts/navbarItems'
import { navbarStyles } from './styles'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import image from "/profpic.jpg"

const NavBar = () => {
  const navigate = useNavigate()


    return(
      <Drawer
      sx={navbarStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <center>
          <Avatar 
          alt="diid nugroho"
          src={image}
          sx ={{width: 160, height: 170, marginBottom: 5 }}/>
        </center>
        {mainNavbarItems.map((item) => (
          <ListItem 
          button 
          key={item.id}
          onClick={() => navigate(item.route)}
          >
              <ListItemText 
              sx={navbarStyles.text}
              primary={item.label} 
              />
          </ListItem>
        ))}
      </List>
    </Drawer>
    )
}

export default NavBar