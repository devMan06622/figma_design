import { Box, Grid, Container, Typography, Stack, Button, Chip, } from '@mui/material';
import card5 from '../assets/about/card5.svg';
import marks from '../assets/about/marks.svg';
import EmblaCarousel from './EmblaCarousel'
import GlobalCarousel from './GlobalCarousel'
import { Company, Global, Blockchain, blockchainData, globalData } from './components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../css/embla.css'
import { SeeAllBtn } from './Button';
const OPTIONS = { loop: true }
const GLOBALSLIDES = globalData;
const SLIDES = blockchainData;

export default function About() {
  return (
    <Stack alignItems="center" justifyContent={'center'}>
      {/* Top Section */}
      <Stack>
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', px: '5px', py: '20px', fontSize: '14px', mb: { md: '33px', xs: '18px' } }} />
      </Stack>
      <Container>
        <Company />
        {/* Bottom Section */}
        <Box sx={{ textAlign: 'center', mb: { md: '161px', xs: '73px' } }}>
        </Box>
        <Stack alignItems="center" spacing={2} sx={{ mb: '40px' }}>
          <Typography fontSize={{ md: "45px", xs: "32px", maxWidth: '699px' }} variant="h4" fontWeight="bold" align="center">
            Our Unique Approach To Global Compliance <Box component="span" color="#767676">And</Box> Innovation
          </Typography>
          <Typography color="#bdbdbd" align="center" sx={{ maxWidth: 700 }}>
            We build and deliver original, localized solutions tailored to the needs of diverse markets, collaborating with institutions, regulators, and end users around the world.
          </Typography>
        </Stack>
        <Box sx={{ display: { md: 'none', sm: 'block', xs: 'block' } }}>
          <GlobalCarousel slides={GLOBALSLIDES} options={OPTIONS} />
        </Box>
        <Box sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>
          <Global slides={GLOBALSLIDES} options={OPTIONS} />
        </Box>
      </Container>
      <Stack alignItems="center" sx={{ mt: '40px', mb: '65px' }}>
        <Button variant="contained" sx={{
          borderRadius: '100px',
          px: 7,
          py: 2,
          bgcolor: 'white',
          color: 'black',
          fontWeight: 600,
          textTransform: 'none',
          mb: 2,
          width: '249px',
          height: '62px',
          fontSize: '14px',
          display: { md: 'block', xs: 'none' }
        }}>Ask a Question</Button>
      </Stack>
      {/* Compliance Section */}
      <Grid container spacing={{ md: 3, sm: 2, xs: 0 }} alignItems="center" justifyContent="center" direction={{ md: "row", sm: "column", xs: "column" }} sx={{ mb: { md: '33px', xs: '79px' } }}>
        <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
          <Box component="img" src={card5} alt="Check Blockchain Address" sx={{ width: '100%' }} />
        </Grid>
        <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" }, textAlign: { md: 'left', xs: 'center' }, px: { md: 0, xs: '16px' } }}>
          <Box component="img" src={marks} alt="FATF" sx={{ maxWidth: { md: '517px', xs: '128px' } }} />
          <Typography variant="h4" fontWeight={700} mb={2}>Compliance With Global AML/CFT Standards</Typography>
          <Typography variant="body1" mb={4}>
            The company's products comply with local AML/CFT requirements, FATF recommendations, including the Travel Rule, and EU Directive 6AMLD, which aims to combat money laundering, terrorist financing and the proliferation of weapons of mass destruction.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{
              size: { md: '14px', xs: '12px' },
              borderRadius: 8,
              px: { md: 5, sm: 4, xs: 5 },
              py: { md: 2, sm: '10px', xs: '13px' },
              background: 'white',
              color: 'black',
              mb: '24px'
            }}>FIRST CHECK FREE</Button>
          </Box>
        </Grid>
      </Grid>
      {/* Tools Section */}
      <Stack alignItems="center" spacing={2} sx={{ mb: 4, p: 5 }}>
        <Typography fontSize={{ md: "45px", xs: "32px", maxWidth: '810px' }} fontWeight="bold" align="center">
          <Box component="span" color="#bdbdbd">Chainsecurity</Box> Tools Make Blockchain Safer
        </Typography>
        <Typography color="#bdbdbd" align="center" sx={{ maxWidth: 700 }}>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
        </Typography>
      </Stack>
      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' }, mb: '26px' }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }, mb: '32px' }}>
        <Blockchain slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ mt: { md: '32px', xs: '43px' }, mb: { md: '102px', xs: '84px' } }}>
        <SeeAllBtn />
      </Box>
    </Stack>
  );
}
