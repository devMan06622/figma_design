import { Link } from 'react-router-dom';
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
  const customButtonStyle = { color: 'white', textTransform: 'none', ":hover": { backgroundColor: "white", color: "black" } }
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}   >
      {/* <Toolbar> */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', px: { md: '72px', xs: '18px' }, pt: { md: '62px', xs: '31px' } }}>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Dropdown>
            <MenuButton sx={{ border: 'none', p: 0 }}>
              <Box component="img" src={menu} alt="menu" sx={{ cursor: 'pointer', display: { xs: 'block', md: 'none' } }} />
            </MenuButton>
            <Menu sx={{ backgroundImage: `url(${inputbg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", border: 'none', color: 'white', borderRadius: "10px", boxShadow: '0px 0px 7pxrgba(24, 23, 23, 0.82)' }}>
              <MenuItem>
                <Button color="inherit" component={Link} to="/OurProduct" sx={customButtonStyle}>
                  Our Product
                </Button>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <Button color="inherit" component={Link} to="/Academy" sx={customButtonStyle}>
                  Academy
                </Button>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <Button color="inherit" component={Link} to="/About" sx={customButtonStyle}>
                  About
                </Button>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <Button color="inherit" component={Link} to="/Contact" sx={customButtonStyle}>
                  Contact
                </Button>
              </MenuItem>
            </Menu>
          </Dropdown>
          <Stack component={Link} to="/OurProduct">
            <Box component="img" src={logo} alt="icon" sx={{ width: { lg: '198px', md: '198px', xs: '138px' }, cursor: 'pointer' }} />
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" display={{ xs: 'none', md: 'flex' }} spacing={2}>

          <Button color="inherit" component={Link} to="/OurProduct" sx={customButtonStyle}>
            Our Product
          </Button>
          <Button color="inherit" component={Link} to="/Academy" sx={customButtonStyle}>
            Academy
          </Button>
          <Button color="inherit" component={Link} to="/About" sx={customButtonStyle}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/Contact" sx={customButtonStyle}>
            Contact
          </Button>
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