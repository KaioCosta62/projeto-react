import React, {useState} from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import {useHistory} from 'react-router-dom'
 
import MenuIcon from '@mui/icons-material/Menu'
import AddHomeIcon from '@mui/icons-material/AddHome'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import useStyles from './Header.style'


const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  console.log(history)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = (route) => {
    handleToggleMenu()
    history.push(route)
  }
  return (
    <>
      <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick = {() =>  handleToggleMenu()}
        >
          <MenuIcon />
        </IconButton>
        <Typography className = {classes.title} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer open = {menuOpen} onClose = {() => handleToggleMenu()}>
      <List>
        <ListItem button onClick = {() => handleMenuClick('/')}>
          <ListItemIcon>
            <AddHomeIcon/>
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button  onClick = {() => handleMenuClick('/customers')}>
          <ListItemIcon>
            <PersonAddAltIcon/>
          </ListItemIcon>
          <ListItemText>Listagem de Clientes</ListItemText>
        </ListItem>
        <ListItem button  onClick = {() => handleMenuClick('/customers/add')}>
          <ListItemIcon>
            <PersonAddAltIcon/>
          </ListItemIcon>
          <ListItemText>Cadastro de Clientes</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    </>
    
  )
}

export default Header
