import { Card, Box, Grid, Container, Typography, Stack, Chip, Button } from '@mui/material';
import icon19 from '../assets/product/icon19.svg';
import icon20 from '../assets/product/icon20.svg';
import icon21 from '../assets/product/icon21.svg';
import logo from '../assets/product/logo.svg';
import icon from '../assets/btrace/icon.svg';
import { Company, Global, Blockchain, blockchainData, globalData, moneycardstyle } from './components';
import { SeeAllBtn } from './Button';
import EmblaCarousel from './EmblaCarousel'
import GlobalCarousel from './GlobalCarousel'
import '../css/embla.css'
import hoverchain from '../assets/hover/hoverchain.svg';
import { WhyChooseChainsecurity } from './component';
import productCardBg from '../assets/product/productbg.svg';
import cardGroup from '../assets/product/cardGroup.svg';
import cardProduct from '../assets/product/cardProduct.svg';
import productcardbgmobile from '../assets/product/productcardbgmobile.svg';

const OPTIONS = { loop: true }
const SLIDES = blockchainData;
const GLOBALSLIDES = globalData;

const chainsecuritydata = [
  {
    content: 'Assess the risks of interaction with an address'
  },
  {
    content: 'Set sources of crypto funds on the address'
  },
  {
    content: 'Track the movement of stolen crypto assets'
  },
  {
    content: 'Explore de-anonymized addresses in the graph of connections'
  }
]

const addressdata = [
  {
    icon: icon19,
    title: 'Check Blockchain Address Using Btrace',
    content: 'In seconds, determine the risk level of the counterparty\'s address, find out the source of his funds and make an informed decision about interacting with him',
    button: 'FIRST CHECK FREE'
  },
  {
    icon: icon20,
    title: 'Order a blockchain investigation and return stolen cryptocurrency',
    content: 'In seconds, determine the risk level of the counterparty’s address, find out the source of his funds and make an informed decision about interacting with him.',
    button: 'RECOVER STOLEN CRYPTOCURRENCY'
  },
  {
    icon: icon21,
    title: 'Explore blockchain for yourself at Bholder',
    content: 'Bholder visualizes addresses as graphical elements and the relationships between them, unlike the blockchain explorer where transactions are represented as a table.',
    button: 'DEMONSTRATION OF BHOLDER\'S WORK'
  }
]
export default function OurProduct() {


  return (
    <Stack alignItems="center" justifyContent={'center'}>
      <Stack>
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', px: '5px', py: '20px', fontSize: '14px', mb: { md: '33px', xs: '18px' } }} />
      </Stack>
      <Box sx={{ color: "white", mb: '21px', width: { md: '724px', sm: '624px', xs: '328px' }, textAlign: 'center' }} >
        <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h3" gutterBottom>
          Check Your Crypto Walet-Protect <Box component="span" color="#bdbdbd">Your</Box> Funds!
        </Typography>
        <Typography sx={{ color: "white", paddingTop: "10px", fontSize: {md:'16px',xs:'14 px'} }} variant="subtitle1" gutterBottom>
          Chain Security is a technology company, speakers at leading industry exhibitions
          <br /> on blockchain technologies, big data and information security, investigations of
          <br />crypto fraud cases around the world.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: { md: 'block',sm:'block', xs: 'none' }, px:'20px' , paddingTop: {md:'112px',sm:'86px'}}}>
          <img style={{ width: "100%" }} src={productCardBg} alt="productCardBg" />
        </Box>
        <Box sx={{ display: { md: 'none',sm:'none', xs: 'block' } }}>
          <img style={{ width: "100%", paddingTop: "15px" }} src={productcardbgmobile} alt="productcardbgmobile" />
        </Box>
        <Box sx={{ position: 'absolute', top: { md: '80px', sm: '50px', xs: '180px' }, left: { md: 0, sm: 0, xs: 0 }, right: { md: '245px', sm: 0, xs: 0 } }}>
          <Box sx={{ position: "absolute", top: "0px", right: "0px", transform: "rotate(0deg)" }}>
            <Box component="img" sx={{ width: { md: '100%', xs: '85%' } }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-25px", right: "17px", transform: "rotate(-3deg)" }}>
            <Box component="img" sx={{ width: { md: '100%', xs: '85%' } }} src={cardGroup} alt="cardGroup" />
          </Box>
          <Box sx={{ position: "absolute", top: "-40px", right: "58px", transform: "rotate(-2deg)" }}>
            <Box component="img" sx={{ width: { md: '100%', xs: '85%' } }} src={cardProduct} alt="cardProduct" />
          </Box>
        </Box>
      </Box>
      <Box align="center" sx={{ width: { md: '684px', sm: '580px', xs: '328px' }, color: "white", marginTop: {md:'120px',xs:'150px'}, textAlign: 'center' }} >
        <Typography fontSize={{ md: "45px", xs: "32px" }} gutterBottom>
          <Box component="span" color="#767676"> Chainsecurity </Box> Tools Make  Blockchain Safer
        </Typography>
        <Typography sx={{ color: "#a9a9a6", paddingTop: "5px", marginBottom: '55px' }} variant="subtitle1" gutterBottom>
          Enjoy a more private and secure internet, block malicious websites, stop web trackers,
          and monitor your data leaks all in one app.
        </Typography>
      </Box>
      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' }, mb: '32px' }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }, mb: '32px' }}>
        <Blockchain slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ mb: { md: '110px', sm: '60px', xs: '48px' } }}>
        <SeeAllBtn />
      </Box>
      <Box align="center" sx={{ mb: { md: '63px', sm: '5 0px', xs: '24px' }, width: { md: '480px', sm: '390px', xs: '328px' }, textAlign: 'center' }}>
        <Typography sx={{ color: "white", bottom: 0 }} fontSize={{ md: "45px", xs: "32px" }} variant="h3" gutterBottom>
          <Box component="span" color="#767676">Why</Box> Choose Chainsecurity?
        </Typography>
        <Typography sx={{ color: "white" }} >
          We build long-term relationships with publishers and influencers
        </Typography>
      </Box>
      <Stack p={2} spacing={2} justifyContent="center" alignItems="center" sx={{ mb: { md: '47px', sm: '20px', xs: '0px' } }}>
        <Grid direction={{ md: "row", sm: "column", xs: "column" }} container spacing={{ md: 2, xs: 1 }} sx={{ margin: '100px' }}>
          {chainsecuritydata.map((item, index) => (
            <Grid key={index} item size={{ md: 6, sm: 12, xs: 12 }}>
              <Box sx={{ backgroundImage: `url(${hoverchain})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '7px', transition: '0.2s', cursor: 'pointer', "img": { backgroundColor: '#FF8629', transition: '0.2s' } }, borderRadius: '29px' }}>
                <Card sx={moneycardstyle}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%' }} />
                    <Typography sx={{ size: '20px' }} variant="body1">{item.content}</Typography>
                  </Stack>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Box sx={{ color: 'white', }}>
        <WhyChooseChainsecurity data={addressdata} />
        <Container maxWidth="lg" sx={{ textAlign: 'center', pb: { md: '47px', xs: '24px' } }}>
          <Box textAlign="center" sx={{ mt: { md: '47px', sm: '30px', xs: '78px' }, mb: '16px' }}>
            <Box component="img" src={logo} alt="Chainsecurity" sx={{ maxWidth: '198px' }} />
          </Box>
          <Company />
          {/* Bottom Section */}
          <Box textAlign="center" mb={{md:'186px',xs:'120px'}}>
          </Box>
          <Box sx={{ mb: '43px' }}>
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
          </Box>
        </Container>
      </Box>
    </Stack >
  )
}