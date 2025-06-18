import { Box, Button, Grid, Typography, Stack, Chip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card11 from '../assets/btrace/card11.svg';
import card22 from '../assets/btrace/card22.svg';
import logo from '../assets/product/logo.svg';
import { bholdercardData, Global } from './components';
import movie from '../assets/bholder/movie.svg'
import moviemobile from '../assets/bholder/moviemobile.svg'
import '../css/embla.css'
import { WhyChooseChainsecurity } from './component';
import GlobalCarousel from './GlobalCarousel'
import Line from '../assets/Line.svg';
const OPTIONS = { loop: true }
const BHOLDERDATA = bholdercardData;

const ProvideData = [
  {
    icon: card11,
    title: 'Provide data visually',
    content: 'To simplify the perception in the graph of links between addresses, you can see the amount of sent tokens. If necessary, you can get details of which transactions it consists of',
    button: 'Read More'
  },
  {
    icon: card22,
    title: 'We successfully work with different types of tokens',
    content: 'The amount of interaction between addresses is displayed in a token or a selected unit of measure, for example USDT.',
    button: 'Read More'
  }
]


export default function Bholder() {
  return (
    <Stack color='white' alignItems="center" sx={{ width: '100%' }}>
      <Chip label="Btrace" sx={{ bgcolor: '#23222a', color: '#bdbdbd', width: '101px', color: 'white', height: '38px', borderRadius: '51px', p: '10px', fontSize: '14px', mb: { md: '26px', xs: '33px' } }} />
      <Box sx={{ pb: { md: '74px', xs: '37px' } }}>
        <Stack alignItems="center">
          <Typography variant="h4" fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ mb: '22px', maxWidth: '855px' }}>
            Visualizing Interactions Between <Box component="span" color="#767676">Blockchain</Box> Addresses
          </Typography>
          <Typography variant="body1" color="#bdbdbd" sx={{ mb: '22px', maxWidth: { md: '861px', xs: '300px' } }}>
            A tool that visualizes the interactions between blockchain addresses
          </Typography>
          <Stack direction="row">
            <Button sx={{
              backgroundColor: "white",
              color: 'black',
              borderRadius: '100px',
              px: 5,
              py: 2,
              bgcolor: 'white',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '14px'
            }}>
              Check crypto wallet
            </Button>
            <Button color="white" sx={{ textTransform: 'none', ml: { md: '30px', xs: '24px' } }} endIcon={<ArrowForwardIosIcon />}>About Us</Button>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
        <GlobalCarousel slides={BHOLDERDATA} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
        <Global slides={BHOLDERDATA} options={OPTIONS} />
      </Box>
      {/* <Box direction="row" spacing={2}>
        <Box sx={{ m: '8px' , width:'37px' }} component='img' src={Line} alt="Line" />
        <Box sx={{ m: '8px' , width:'37px' }} component='img' src={Line} alt="Line" />
        <Box sx={{ m: '8px' , width:'37px' }} component='img' src={Line} alt="Line" />
      </Box> */}
      <Box maxWidth="lg" sx={{ mb: 8, mt: { md: '0px', xs: '26px' } }}>
        <WhyChooseChainsecurity data={ProvideData} />
      </Box>
      <Stack alignItems="center" spacing={2} sx={{ mb: '47px' }}>
        <Box component="img" src={logo} alt="Chainsecurity" sx={{ mb: 2, maxWidth: '198px' }} />
        <Typography variant="h4" fontWeight="bold" align="center">Demonstration <br /> of<Box component="span" color="#767676"> Bholder’s </Box>work</Typography>
        <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
        </Typography>
      </Stack>
      <Box>
        <Box component="img" src={movie} alt="Chainsecurity" sx={{ display: { md: 'block', sm: 'block', xs: 'none' }, mb: '73px', width: '100%', height: '100%' }} />
        <Box component="img" src={moviemobile} alt="Chainsecurity" sx={{ display: { md: 'none', sm: 'none', xs: 'block' }, mb: '73px', width: '100%', height: '100%' }} />
      </Box>
    </Stack>
  );
} 