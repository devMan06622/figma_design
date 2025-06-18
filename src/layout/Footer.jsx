import { Box, Typography, Grid, Stack, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/footer/logo.svg';
import telegram from '../assets/footer/telegram.svg';
import x from '../assets/footer/x.svg';
import bg from '../assets/footer/footerbg.svg';

export default function Footer() {
  const footerStyle = { color: 'white', size: '14px', ':hover': { color: '#ff8c32' } }
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <Box sx={{ px: { xs: '25px', md: '69px' }, py: { xs: '48px', md: '68px' }, color: 'white' }}>
        <Grid container spacing={4} direction={{ md: "row", sm: "column", xs: "column" }}>
          <Grid size={{ md: 3, xs: 12 }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Stack direction="row" alignItems="center" spacing={2} mb={2} mt={{ md: '80px', xs: '0px' }}>
                <img src={logo} alt="Chainsecurity.io" />
              </Stack>
              <Typography textAlign={{xs:'center',md:'left'}} variant="body2" color="rgba(255,255,255,0.7)" sx={{ size: '14px' }}>
                We rely solely on our in-house technologies and solutions, ensuring full control, independence, and innovation without third-party dependencies.
              </Typography>
            </Box>
          </Grid>
          <Grid size={9} px={{ md: 0, xs: '40px' }}>
            <Grid container spacing={{ lg: 16, md: 4 }} sx={{ float: 'right', mr: { lg: '60px', md: '0px' } }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>QUICK LINKS</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">ALL TIME RANKINGS</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">DAILY RANKING</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" >NEW LISTINGS</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">SUBMIT COIN</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">UPDATE REQUEST</MuiLink>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>LEGAL</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">OFFICIAL VERIFICATION</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">PRIVACY POLICY</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">TERMS OF SERVICE</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">COOKIES POLICY</MuiLink>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>QUICK LINKS</Typography>
                <Stack spacing={1} gap={1.2}>
                  <MuiLink component={Link} to="/ContactUs" underline="none" color="inherit">CONTACT US</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">SERVICES</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">ADVERTISE</MuiLink>
                  <MuiLink sx={footerStyle} href="#" underline="none" color="inherit">BLOG</MuiLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: 'black', py: 2, px: { xs: 2, md: 8 }, display: { md: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: {md:'space-between', xs:'center'} }}>
        <Typography variant="body2" color="white" sx={{textAlign:'center',size:'16px',mb:{md:'0px',xs:'16px'}}}>
          Copyright © {new Date().getFullYear()} , All Right Reserved
        </Typography>
        <Stack direction="row" justifyContent={{md:'flex-end', xs:'center'}}>
          <IconButton >
            <img src={telegram} alt="Telegram" style={{ width: '100%', height: '100%' }} />
          </IconButton>
          <IconButton>
            <img src={x} alt="X" style={{ width: '100%', height: '100%' }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
} 