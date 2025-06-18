import { Box, Button, Grid, Typography, Stack, Card, TextField, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import groupM from '../assets/btrace/GroupM.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card11 from '../assets/btrace/card11.svg';
import card22 from '../assets/btrace/card22.svg';
import logo from '../assets/product/logo.svg';
import questionbg from '../assets/btrace/questionbg.svg';
import searchbg from '../assets/btrace/searchbg.svg';
import EmblaCarousel from './EmblaCarousel'
import MoneyCarousel from './MoneyCarousel'
import { ImportantData, Blockchain, MoneyCard, moneycarddata } from './components';
import { WhyChooseChainsecurity } from './component';
import GroupMobile from '../assets/btrace/GroupMobile.svg';
import '../css/embla.css'
const OPTIONS = { loop: true }
const SLIDES = ImportantData;
const MONEYCARDS = moneycarddata;

const faqData = [
  {
    question: 'What is Risk Score?',
    answer: 'This is a parameter that is expressed as a value from 0 to 100, which investigates and analyzes the history of the item and determines the likelihood of its connection with illegal or suspicious activity.'
  },
  {
    question: 'What Should I Do If I Received Dirty Funds?',
    answer: 'If you received dirty funds, you should contact the service for further instructions and possible solutions.'
  },
  {
    question: 'Can The Risk Score Be Improved?',
    answer: 'The risk score can be improved by providing additional information and clarifications about the source of funds.'
  },
  {
    question: 'What is Risk Score?',
    answer: 'This is a parameter that is expressed as a value from 0 to 100, which investigates and analyzes the history of the item and determines the likelihood of its connection with illegal or suspicious activity.'
  },
  {
    question: 'What Should I Do If I Received Dirty Funds?',
    answer: 'If you received dirty funds, you should contact the service for further instructions and possible solutions.'
  },
  {
    question: 'Can The Risk Score Be Improved?',
    answer: 'The risk score can be improved by providing additional information and clarifications about the source of funds.'
  },
];

const walletData = [
  {
    icon: card11,
    title: 'Check Quality Assurance',
    content: 'Check it out for free – we will give you a unique opportunity to look at cryptocurrency wallets through the eyes of an exchange compliance manager and see how our service works in practice.',
    button: 'Reсeive checks'
  },
  {
    icon: card22,
    title: 'Best Price Guarantee',
    content: 'The service is built on our own technological base, so we give a better price than any third-party solution reseller.',
    button: 'Reсeive checks'
  }
]


export default function Btrace() {
  return (
    <Stack color='white' sx={{ width: '100%' }}>
      <Stack alignItems="center" alignContent="center">
        <Chip label="Btrace" sx={{ bgcolor: '#23222a', color: '#bdbdbd', width: '101px', color: 'white', height: '38px', borderRadius: '51px', p: '10px', fontSize: '14px', mb: '26px' }} />
        <Box sx={{ pt: 2 }}>
          <Stack alignItems="center">
            <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h4" fontWeight="bold" align="center" sx={{ mb: '35px' }}>
              Checking A Crypto Wallet For  Connection With <Box component="span" color="#767676">“Dirty”</Box> Money Will Allow
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
            <Box sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' } }}>
              <MoneyCarousel slides={MONEYCARDS} options={OPTIONS} />
            </Box>
            <Box sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
              <MoneyCard />
            </Box>
          </Stack>
        </Box>

        {/* You Don't Have To Do Anything Bad To Get Blocked Section */}
        <Box sx={{ mt: { md: '96px', xs: '32px' }, mb: 8 }}>
          <Stack alignItems="center" spacing={2}  sx={{ maxWidth: '861px' ,p:'10px'}}>
            <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h4" fontWeight="bold" align="center">
              You <Box component="span" color="#bdbdbd">Don't Have</Box> To Do Anything Bad To  Get Blocked
            </Typography>
            <Typography align="center" color="#bdbdbd">
              Let's imagine Austin – a 29-year-old crypto user living a perfectly ordinary working as a system analyst in a successful IT company. His stable salary is complemented by additional income from various freelance projects, which allows him to periodically invest in cryptocurrencies.
            </Typography>
            <Box sx={{ width: '100%', mt: { md: '32px', xs: '17px' }, mb: { md: '96px', xs: '53px' }, borderRadius: 4, overflow: 'hidden', boxShadow: 3, display: { xs: 'none', md: 'block' } }}>
              <img src={groupM} alt="Austin's story" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '100%', mt: { md: '32px', xs: '17px' }, mb: { md: '96px', xs: '53px' }, borderRadius: 4, overflow: 'hidden', boxShadow: 3, display: { xs: 'block', md: 'none' } }}>
              <img src={GroupMobile} alt="Austin's story" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Stack>
        </Box>

        {/* Check Crypto Wallet Free Section */}
        <Box sx={{ mb: 8, width: '90%' }}>
          <Stack spacing={2} sx={{ mb: '20px', textAlign: 'center', alignItems: 'center' }}>
            <Typography fontSize={{ md: "45px", xs: "32px" }} fontWeight="bold" align="center" sx={{ maxWidth: { md: '330px', xs: '300px' } }}>Check Crypto  Wallet <Box component="span" color="#bdbdbd">Free</Box></Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: '480px' }}>Works with Ethereum, BSC, Bitcoin, Tron, Everscale, Venom  (soon)</Typography>
          </Stack>
          <Box sx={{ maxWidth: '1001px', p: '10px', borderRadius: '100px', backgroundImage: `url(${searchbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', backgroundImage: `url(${questionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '100px', p: 2, boxShadow: 3 }}>
              <TextField
                fullWidth
                placeholder="Check Wallet Address ..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: { color: 'white', pl: 2 },
                }}
                sx={{ bgcolor: 'transparent', flex: 1 }}
              />
              <Button variant="contained" sx={{ ml: 2, borderRadius: '30px', px: 4, bgcolor: '#FF8629', color: 'white', fontWeight: 600, textTransform: 'none', }}>Check</Button>
            </Box>
          </Box>
        </Box>

        {/* Quality Assurance & Price Guarantee Section */}
        <Box maxWidth="lg" sx={{ mb: '88px' }}>
          <WhyChooseChainsecurity data={walletData} />
        </Box>

        {/* Why Is It Important To Check Section */}
        <Box sx={{ mb: { md: '45px', xs: '24px' } }}>
          <Stack alignItems="center" spacing={2}>
            <Box component="img" src={logo} alt="Chainsecurity" sx={{ mb: 2, maxWidth: '198px' }} />
            <Typography variant="h4" fontWeight="bold" align="center">Why Is It <Box component="span" color="#bdbdbd">Important</Box> To Check?</Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
              Enjoy a more private and secure internet, block malicious websites, stop web trackers and monitor your data leaks all in one app.
            </Typography>
          </Stack>
        </Box>
      </Stack>
      {/* Header Section */}

      <Box sx={{ display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Box>
      <Box sx={{ display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
        <Blockchain slides={SLIDES} options={OPTIONS} />
      </Box>
      {/* FAQ Section */}
      <Stack alignItems="center" sx={{ mt: { md: '118px', xs: '80px' } }}>
        <Box maxWidth="md" sx={{ mb: { md: '60px', xs: '80px' } }}>
          <Stack alignItems="center">
            <Chip label="FAQ" sx={{
              bgcolor: '#23222a',
              color: '#bdbdbd',
              width: { xs: '131px', md: '96px' },
              height: '38px',
              borderRadius: '51px',
              p: '10px',
              fontSize: '14px',
              mb: '30px'
            }} />
            <Typography sx={{ mb: '24px' }} variant="h4" fontWeight="bold" align="center">Frequently <Box component="span" color="#bdbdbd">Asked</Box> Questions</Typography>
            <Typography align="center" color="#bdbdbd" sx={{ maxWidth: 700 }}>
              Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide.
            </Typography>
          </Stack>
          <Box sx={{ mt: 4, p: { md: '0', xs: '16px' } }}>
            {faqData.map((faq, idx) => (
              <Accordion key={idx} sx={{ backgroundImage: `url(${questionbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white', mb: 2, borderRadius: '16px !important', boxShadow: 2, p: '15px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography fontWeight="bold">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="#bdbdbd">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Stack>

    </Stack>
  );
}