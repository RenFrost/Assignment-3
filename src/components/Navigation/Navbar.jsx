import { Link } from 'react-router-dom'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import {mainNavbarItems} from '../consts/navbarItems'
import {useParams, useNavigate} from 'react-router-dom'

{/* <Link to="/">Homepage</Link> |  
            <Link to="/about">About Me</Link> |
            <Link to="/experiences">Work Experience</Link> |
            <Link to="/skills">Skills</Link> |
            <Link to="/interests">Interests</Link> |
            <Link to="/certificates">Certificates</Link> |
            <Link to="/Awards">Awards</Link>  */}

const NavBar = () => {

  const drawerWidth = 240

    return(
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#101F33',
          color: 'rgba(255,255,255,0.7)'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemButton>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    )
}

export default NavBar