import { Box, Grid, Typography, Stack, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import card01 from '../assets/product/card01.svg';
import card02 from '../assets/product/card02.svg';
import card03 from '../assets/product/card03.svg';
import Groupbg1 from '../assets/product/Group1.svg';
import Groupbg2 from '../assets/product/Group2.svg';
import bholderbg from '../assets/bholder/cardbg.svg';
import cardbg from '../assets/product/cardbg.svg';
import card04 from '../assets/product/card04.svg';
import card05 from '../assets/product/card05.svg';
import card06 from '../assets/product/card06.svg';
import hovercardbg0 from '../assets/hover/hovercardbg0.svg';
import hovergroupbg0 from '../assets/hover/hovergroupbg0.svg';
import hovergroupbgaction from '../assets/hover/hovergroupbgaction.svg';
import hovergroupbg2 from '../assets/hover/hovergroupbg2.svg';
import hovergroup2action from '../assets/hover/hovergroup2action.svg';
import Groupbg from '../assets/Groupbg.svg';
import icon from '../assets/btrace/icon.svg';
import hoverchain from '../assets/hover/hoverchain.svg';
import hovergroupbg from '../assets/hover/hovergroupbg.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import hovercardbg from '../assets/hover/hovercardbg.svg';

export const globalstyle = {
  backgroundImage: `url(${Groupbg2})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: '37px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  boxShadow: '0px 0px 20px #000000',
  ':hover': {
    backgroundImage: `url(${hovergroupbg2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: '0.2s',
  }
}
export const bholderstyle = {
  backgroundImage: `url(${bholderbg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: 6,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  boxShadow: 'inset 0px 0px 20px 0pxrgba(255, 255, 255, 0.17)'
}

export const companystyle = {
  backgroundImage: `url(${Groupbg1})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: 6,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  boxShadow: 'inset 0px 0px 20px 0pxrgba(255, 255, 255, 0.17)',
  ':hover': {
    backgroundImage: `url(${hovergroupbg0})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: '0.2s',
  }
}

const companydata = [
  {
    title: 'Team Qualification',
    content: 'Experienced certified AML/CFT specialists, blockchain investigators, developers, OSINT specialists. Our employees regularly speak at specialized exhibitions and conferences as invited experts, and  dozens of different cases of crypto',
    btName: 'Read More'
  },
  {
    title: 'Operational Efficiency',
    content: 'Our investigations have been accepted by law enforcement agencies in different countries, by dozens of cryptocurrency exchanges, used in hundreds of crypto investigations, and taken into account by courts in different jurisdictions.',
    btName: 'Read More'
  }
]

export const globalData = [
  {
    title: 'Proprietary     Technology',
    content: 'We rely solely on our in-house technologies and solutions, ensuring full control, independence, and innovation without third-party dependencies.'
  },
  {
    title: 'Global Compliance & Localization',
    content: 'We adapt our services to local legal frameworks and market specifics, enabling smooth operations with clients and partners across the globe.'
  },
  {
    title: 'Trusted By      Institutions',
    content: 'We work with banks, regulators, law enforcement, crypto platforms, exchangers, and individuals to ensure secure, transparent financial interactions.'
  }
]
export const cardData = [
  {
    title: 'Checking thousands of wallets instantly',
    content: 'The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.'
  },
  {
    title: 'Integration, documentation, support',
    content: 'Our programmers if necessary, adapt an algorithm for assessing the riskiness of certain funds/wallets to your compliance standards.'
  },
  {
    title: 'Making the blockchain transparent',
    content: 'The speed requirements for AML verification are high. That is why we offer our clients the opportunity to obtain the risk score for a wallet via the API.'
  },
];
export const bholdercardData = [
  {
    title: 'Graph-Based Address Visualization',
    content: 'Visualize addresses as graphical elements and connections between them'
  },
  {
    title: 'Follow the Flow of Blockchain Funds',
    content: 'Trace the path of funds from the address under investigation to their current location'
  },
  {
    title: 'Identify Probable Wallet Owners',
    content: 'Obtain information on likely owners based on address markup'
  },
  {
    title: 'Detect the Source of Crypto Assets',
    content: 'Establish the sources of origin of funds on the cryptocurrency address'
  },
  {
    title: 'Group Data for Better Insight',
    content: 'Simplify the perception of a large number of transactions and addresses through grouping'
  },
];

export const blockchainstyle = {
  backgroundImage: `url(${cardbg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: { md: "397px", sm: "397px", xs: '320px' }, height: { md: "522px", xs: '381px' },
  borderRadius: '20px',
  boxShadow: '0px 0px 20px #000000',
  ':hover': {
    backgroundImage: `url(${hovercardbg0})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: '0.2s',
  }
}
export const blockchainData = [
  {
    LinkName: 'Btrace',
    title: 'Btrace',
    content: 'AML verification of cryptocurrency addresses to assess the level of risk and understand the sources of funds',
    img: card01
  },
  {
    LinkName: 'Api',
    title: 'Blockchainb Investigations',
    content: 'Search and return of stolen cryptocurrency',
    img: card02
  },
  {
    LinkName: 'Bholder',
    title: 'Bholder',
    content: 'A tool that visualizes the interactions between blockchain addresses',
    img: card03
  }
]
export const moneycardstyle = {
  backgroundColor: 'transparent !important',
  backgroundImage: `url(${Groupbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  height: '100%',
  px: '24px', py: { md: '33px', xs: '18px' }, boxShadow: 5,
  width: { md: "100%" },
  borderRadius: '20px',
  ":hover": {
    backgroundImage: `url(${hovergroupbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: '0.2s',
    cursor: 'pointer'
  }
}

export const moneycarddata = [
  {
    content: 'protect yourself from "dirty" assets'
  },
  {
    content: 'prevent blocking of funds due to high risk score'
  },
  {
    content: 'get out of trouble with the law'
  }
]

export const ImportantData = [
  {
    title: 'Inability to find evidence of a particular transaction',
    content: 'Inability to find evidence of a particular transaction',
    img: card04

  },
  {
    title: 'Inability to find evidence of a particular transaction',
    content: 'Inability to find evidence of a particular transaction',
    img: card05

  },
  {
    title: 'Inability to find evidence of a particular transaction',
    content: 'Inability to find evidence of a particular transaction',
    img: card06
  },
]
export const cardstyle = {
  width: { md: '364px', sm: '205px', xs: '205px' },
  height: { md: '364px', sm: '205px', xs: '205px' },
  backgroundColor: "#bb71250d"
}
export function Company() {
  return (
    <>
      <Stack spacing={2} sx={{ width: { md: "720px", xs: "340px" }, pb: 4, mx: 'auto' }}>
        <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h3" fontWeight="bold" align="center">
          Chain Security Is <Box component="span" color="#bdbdbd">An</Box> International Technology Company
        </Typography>
        <Typography variant="body1" color="#bdbdbd" align="center" sx={{ maxWidth: 700, mt: '24px' }}>
          Specializes in developing blockchain analytics tools and investigating crypto fraud incidents worldwide.
        </Typography>
      </Stack>
      {/* Team/Operational Cards */}
      <Grid sx={{ alignItems: 'stretch' }} container spacing={3} justifyContent="center" alignItems="center" direction={{ md: "row", sm: "row", xs: "column" }}>
        {companydata.map((data, index) => (
          <Grid key={index} item size={6} justifyContent="center" sx={{ width: { md: "48%", xs: "100%" } }}>
            <Box sx={{
              backgroundImage: `url(${hovergroupbgaction})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": {
                p: '10px', transition: '0.2s', cursor: 'pointer', "Button": {
                  background: "linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)",
                  color: 'white',
                }
              }, borderRadius: '29px', height: '100%'
            }}>
              <Box sx={companystyle}>
                <Typography fontSize={{ md: '32x', xs: '24px' }} variant="h4" fontWeight="bold" gutterBottom align="center">{data.title}</Typography>
                <Typography fontSize='14px' color="#bdbdbd" align="center" sx={{ mb: 3 }}>
                  {data.content}
                </Typography>
                <Button endIcon={<ArrowForwardIosIcon />} variant="contained" sx={{
                  borderRadius: '100px',
                  px: { md: 7, xs: 10 },
                  py: 2,
                  bgcolor: 'white',
                  color: 'black',
                  fontWeight: 600,
                  textTransform: 'none',
                  mb: 2,
                  fontSize: '14px',
                }}>{data.btName}</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export function Global(props) {
  const { slides, options } = props
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" direction={{ md: "row", sm: "column", xs: "column" }}>
        {slides.map((item, index) => (
          <Grid key={index} size={4} md={4}>
            <Box sx={{ backgroundImage: `url(${hovergroup2action})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '10px', transition: '0.2s', cursor: 'pointer', 'img': { backgroundColor: '#FF8629' } }, borderRadius: '29px', height: '100%' }}>
              <Box sx={globalstyle}>
                <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%', mb: '95px' }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>{item.title}</Typography>
                  <Typography color="#bdbdbd">
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export function BholderCard() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" direction={{ md: "row", sm: "column", xs: "column" }}>
        {bholdercardData.map((item, index) => (
          <Grid key={index} size={{ lg: 4, md: 6 }}>
            <Box sx={{ backgroundImage: `url(${hovergroup2action})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '10px', transition: '0.2s', cursor: 'pointer', 'img': { backgroundColor: '#FF8629' } }, borderRadius: '29px' }}>
              <Box sx={globalstyle}>
                <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%' }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>{item.title}</Typography>
                <Typography color="#bdbdbd">
                  {item.content}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

// export function IssuesCard() {
//   return (
//     <Grid container spacing={2} justifyContent="center" sx={{ mb: '100px' }} direction={{ md: "row", sm: "column", xs: "column" }}>
//       {cardData.map((item, index) => (
//         <Grid key={index} size={{ lg: 4, md: 4, sm: 6, xs: 12 }} >
//           <Box sx={{ backgroundImage: `url(${hovergroup2action})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '10px', transition: '0.2s', cursor: 'pointer', 'img': { backgroundColor: '#FF8629' } }, borderRadius: '29px' }}>
//             <Box sx={globalstyle}>
//               <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%' }} />
//               <Typography variant="h5" fontWeight="bold" gutterBottom>{item.title}</Typography>
//               <Typography color="#bdbdbd">
//                 {item.content}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   )
// }

export function Blockchain(props) {
  const { slides, options } = props

  return (
    <>
      <Stack direction={{ md: "row", sm: "column" }} spacing={2} justifyContent="center" alignItems="center">
        {slides.map((data, index) => (
          <Box key={index} sx={{ backgroundImage: `url(${hovercardbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '10px', transition: '0.2s', cursor: 'pointer' }, borderRadius: '28px',textDecoration: 'none' }} component={Link} to={`/${data.LinkName}`}>
            <Box key={index} sx={blockchainstyle}>
              <Box sx={{ px: { md: "15px", sm: "90px", xs: "55px" } }}>
                <Box component="img" src={data.img} sx={cardstyle} alt="icon" />
              </Box>
              <Box sx={{ px: "33px", pb: '30px' }}>
                <Typography fontSize='24px' sx={{ color: "white", bottom: 0 }} gutterBottom>
                  {data.title}
                </Typography>
                <Typography sx={{ color: "white", fontSize: "14px" }} >
                  {data.content}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  )
}
export function MoneyCard() {
  return (
    <Stack spacing={2}>
      <Grid justifyContent={'center'} sx={{ px: '20px' }} container spacing={2} direction={{ md: "row", sm: "row", xs: "column" }}>
        {moneycarddata.map((item, index) => (
          <Grid key={index} item size={{ md: 4, sm: 6, xs: 12 }}>
            <Box sx={{ backgroundImage: `url(${hoverchain})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '7px', transition: '0.2s', cursor: 'pointer', "img": { backgroundColor: '#FF8629', transition: '0.2s' } }, borderRadius: '29px', height: '100%' }}>
              <Card sx={moneycardstyle}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box component="img" src={icon} alt="icon" sx={{ p: '13px', backgroundColor: '#23222a', borderRadius: '50%' }} />
                  <Typography sx={{ marginLeft: '24px !important', size: '20px' }} variant="body1">{item.content}</Typography>
                </Stack>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}