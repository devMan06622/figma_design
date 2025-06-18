import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cardbg from '../assets/product/cardbg.svg';
import { Box, Grid, Typography, Stack, Button, Card } from '@mui/material';
import icon from '../assets/btrace/icon.svg';
import hoverchain from '../assets/hover/hoverchain.svg';
import { moneycardstyle } from './components';

export const blockchainstyle = {
  backgroundImage: `url(${cardbg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: { md: "397px", sm: "397px", xs: '320px' }, height: { md: "100%", xs: '381px' },
  borderRadius: '20px',
}
export const cardstyle = {
  width: { md: '364px', sm: '205px', xs: '205px' },
  height: { md: '364px', sm: '205px', xs: '205px' },
  backgroundColor: "#bb71250d"
}

const MoneyCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Grid key={index} item size={{ md: 4, sm: 6, xs: 12 }}>
                <Box sx={{ backgroundImage: `url(${hoverchain})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '7px', transition: '0.2s', cursor: 'pointer', "img": { backgroundColor: '#FF8629', transition: '0.2s' } }, borderRadius: '29px' }}>
                  <Card sx={moneycardstyle}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box component="img" src={icon} alt="icon" sx={{ p: '10px', backgroundColor: '#23222a', borderRadius: '50%' }} />
                      <Typography sx={{ size: '20px' }} variant="body1">{item.content}</Typography>
                    </Stack>
                  </Card>
                </Box>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoneyCarousel
