import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import { AppBar, Box, Button, Stack, } from '@mui/material';
import logo from '../assets/logo.svg';
import Telegram from '../assets/telegram.svg';
import Close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import inputbg from '../assets/inputBg.svg';
import ListDivider from '@mui/joy/ListDivider';



export default function Header() {
  const location = useLocation();

  const MenuItems = [
    {
      label: 'Our Product',
      link: '/OurProduct'
    },
    {
      label: 'Academy',
      link: '/Academy'
    },
    {
      label: 'About',
      link: '/About'
    },
    {
      label: 'Contact',
      link: '/Contact'
    },
    {
      label: 'Bholder',
      link: '/Bholder'
    },
    {
      label: 'Btrace',
      link: '/Btrace'
    },
    {
      label: 'Riskscore',
      link: '/Riskscore'
    }
  ]

  const customButtonStyle = { color: '#ffffff94', textTransform: 'none', ":hover": { color: "white" } }
  const ourProductButtonStyle = { color: 'white', textTransform: 'none', ":hover": { color: "white" } }
  const menuButtonStyle = { color: '#ffffff94', textTransform: 'none', ":hover": { color: "black" } }
  const ourProductMenuButtonStyle = { color: 'white', textTransform: 'none', ":hover": { color: "black" } }
  
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}   >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', px: { md: '72px', xs: '18px' }, pt: { md: '62px', xs: '31px' } }}>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Dropdown>
            <MenuButton sx={{ border: 'none', p: 0 ,":hover": { backgroundColor: "transparent" } }}>
              <Box component="img" src={menu} alt="menu" sx={{ cursor: 'pointer', display: { xs: 'block', md: 'none' } }} />
            </MenuButton>
            <Menu sx={{width:'100%', backgroundImage: `url(${inputbg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", border: 'none', color: 'white', borderRadius: "10px", boxShadow: '0px 0px 7pxrgba(24, 23, 23, 0.82)' }}>
              {MenuItems.map((item, index) => (
                <>
                  <MenuItem sx={{pl:'30px'}} key={index}>
                    <Button color="inherit" component={Link} to={item.link} sx={location.pathname === item.link  ? ourProductMenuButtonStyle : menuButtonStyle}>
                      {item.label}
                    </Button>
                  </MenuItem>
                  {index < MenuItems.length - 1 && <ListDivider/>}
                </>
              ))}
            </Menu>
          </Dropdown>
          <Stack component={Link} to="/OurProduct">
            <Box component="img" src={logo} alt="icon" sx={{ width: { lg: '198px', md: '198px', xs: '138px' }, cursor: 'pointer' }} />
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" display={{ xs: 'none', sm: 'none', md: 'flex' }} spacing={0}>
          {MenuItems.map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={item.link} sx={location.pathname === item.link ? ourProductButtonStyle : customButtonStyle}>
              {item.label}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack alignItems="center" justifyContent="center" sx={{ width: { lg: '46px', md: '46px', xs: '32px' }, height: { lg: '46px', md: '46px', xs: '32px' }, cursor: 'pointer', background: "white", padding: "10px", borderRadius: "50%" }}>
            <img src={Telegram} alt="Telegram" />
          </Stack>
          <Stack alignItems="center" justifyContent="center" sx={{ width: { lg: '46px', md: '46px', xs: '32px' }, height: { lg: '46px', md: '46px', xs: '32px' }, cursor: 'pointer', background: "rgba(46, 46, 46, 1)", padding: "10px", borderRadius: "50%" }}>
            <img src={Close} alt="Close" />
          </Stack>
        </Stack>

      </Stack>

    </AppBar>
  );
}