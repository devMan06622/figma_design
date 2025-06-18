// ... existing code ...
import { Box, Container, Stack, Typography, Chip, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

import image0 from '../assets/Academy/image0.svg';
import image1 from '../assets/Academy/image1.svg';
import image2 from '../assets/Academy/image2.svg';
import image3 from '../assets/Academy/image3.svg';

const cards = [
  {
    title: "Glossary",
    day: "February 12, 2023",
    image: image0,
  },
  {
    title: "Lesson №1. Blockchain",
    day: "February 12, 2023",
    image: image1,
  },
  {
    title: "Lesson №2. Blockchain Basics, Ethereum...",
    day: "February 12, 2023",
    image: image2,
  },
  {
    title: "Lesson №3. How to earn on the blockchain...",
    day: "February 12, 2023",
    image: image3,
  },
];

export default function Academy() {
  return (
    <Stack
      sx={{
        color: '#fff',
      }}
      alignItems="center" justifyContent={'center'}
    >
      <Stack>
        <Chip label="Chain Security" sx={{ bgcolor: '#23222a', color: '#bdbdbd', px: '5px', py: '20px', fontSize: '14px', mb: { md: '33px', xs: '18px' } }} />
      </Stack>
      <Container sx={{ textAlign: 'center', mb: 6,maxWidth:{md:'606px',xs:'300px'} }}>
        <Typography fontSize={{ md: "45px", xs: "32px" }} variant="h3" fontWeight="bold" gutterBottom sx={{ mb: '22px' }}>
          Chain <Box component="span" color="#bdbdbd">Security</Box> Academy
        </Typography>
        <Typography variant="body1" color="#bdbdbd">
          Chain Security is a technology company, speakers at leading industry exhibitions
          on blockchain technologies, big data and information security, investigations of
          crypto fraud cases around the world.
        </Typography>
      </Container>
      <Container sx={{ mb: '118px' }}>
        <Grid container rowSpacing={0} spacing={2} direction={{ md: "row", sm: "column", xs: "column" }}>
          {cards.map((card, idx) => (
            <Grid size={4} key={idx} sx={{ width: { md: "32%", xs: "100%" } }}>
              <Card variant="outlined" sx={{
                bgcolor: 'transparent', height: '100%', border: 'none', boxShadow: 'none', color: 'rgba(255, 255, 255, 0.65)',
                '&:hover': {
                  'div': {
                    opacity: 1,
                    transition: 'all 1s ease',
                  },
                  'img': {
                    opacity: 0.5,
                    transition: 'all 1s ease',
                  },
                }
              }}>
                <Box sx={{ position: 'relative', paddingTop: '60%' }}> {/* 50% creates a 2:1 aspect ratio */}
                  <Box
                    component="img"
                    src={card.image}
                    alt="image0"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                  <CardContent sx={{
                    position: 'absolute',
                    top: { md: '25%', sm: '36%', xs: '25%' },
                    left: { md: '25%', sm: '36%', xs: '25%' },
                    opacity: 0
                  }}>
                    <Button variant="outlined" sx={{ bgcolor: 'white', color: 'black', fontSize: '14px', fontWeight: 'bold', textTransform: 'none', borderRadius: '30px', px: '34px', py: '12px' }}>Read More</Button>
                  </CardContent>
                </Box>
                <CardContent>
                  <Typography fontSize='16px' level="title-md">{card.title}</Typography>
                  <Typography fontSize='12px' level="body-sm">{card.day}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}