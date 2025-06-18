import { Box, Button, Grid, Typography, Stack, Chip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card from '../assets/api/card.svg';
import cardbg from '../assets/api/cardbg.svg';
import GlobalCarousel from './GlobalCarousel'
import { cardData, Global } from './components';
import cardbgmobile from '../assets/api/cardbgmobile.svg';
import '../css/embla.css'
const OPTIONS = { loop: true }
const GLOBALSLIDES = cardData;

export default function Api() {
  return (
    <Stack color='white' alignItems="center">
      <Stack>
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', px: '5px', py: '20px', fontSize: '14px', mb: { md: '33px', xs: '18px' } }} />
      </Stack>
      <Box sx={{ pb: 4 }}>
        <Stack alignItems="center">
          <Typography variant="h4" fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ mb: '22px', maxWidth: '855px', px: '20px' }}>
            Visualizing Interactions Between <Box component="span" color="#767676">Blockchain</Box> Addresses
          </Typography>
          <Typography variant="body1" color="#bdbdbd" sx={{ mb: '22px', px: '20px', textAlign:'center' }}>
            A tool that visualizes the interactions between blockchain addresses
          </Typography>
          <Stack direction="row" sx={{ mb: '84px' }}>
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
          <Box sx={{ px: '20px' }}>
            <Stack sx={{ px:{md:'49px',xs:'10px'},pt:{md:'42px',xs:'0px'}, pb:{md:'42px',xs:'24px'}, borderRadius: "28px", backgroundImage: { md: `url(${cardbg})`, sm: `url(${cardbg})`, xs: `url(${cardbgmobile})` }, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", height: "100%" ,position:'relative'}}>
              <Grid container alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
                <Grid item size={{ md: 4, xs: 12 }}>
                  <Box component="img" src={card} alt="Check Blockchain Address" sx={{ width: { md: '50%', xs: '100%' }, backgroundColor: '#2a20171f', position: {md:'absolute',xs:'none'},top:{md:'-117px',xs:'none'},left:{md:'-84px',xs:'none'} }} />
                </Grid>
                <Grid item size={{ md: 8, xs: 12 }} sx={{textAlign:{md:'left',xs:'center'}}}>
                  <Chip label="Risk Score API" sx={{ bgcolor: '#23222a', color: '#bdbdbd', px: '5px', py: '20px', fontSize: '14px', mb: { md: '24px', xs: '16px' } }} />
                  <Typography variant="h5" fontWeight={700} fontSize={{ md: "32px", xs: "24px" }} mb={2}> <Box component="span" color="#767676">Various</Box> investment funds and private investors are increasingly  <Box component="span" color="#767676">considering</Box>  blockchain projects as potential investment objects.</Typography>
                  <Typography variant="body1" color="#767676" mb={4}>
                    They look at the history of the blockchain project, infrastructure, community, token holders and exchanges that trade this or that token. They are interested in transparency, understanding the distribution of tokens and the availability of tools that will reduce the impact of regulatory risks on the project.
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h4" fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ mb: '30px',maxWidth:{md:'847px',md:'647px',xs:'370px'}}}>
          We offer a comprehensive approach to    AML  <Box component="span" color="#767676">implementation</Box> issues
        </Typography>
      </Box>
      <Box sx={{ mb: '100px', display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
        <GlobalCarousel slides={GLOBALSLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ mb: '100px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
        <Global slides={GLOBALSLIDES} options={OPTIONS} />
      </Box>
    </Stack>
  );
} 