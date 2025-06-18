import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cardbg from '../assets/product/cardbg.svg';
import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import hovercardbg from '../assets/hover/hovercardbg.svg';
import { Link } from 'react-router-dom';

export const blockchainstyle = {
  backgroundImage: `url(${cardbg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: { md: "397px", sm: "340px", xs: '320px' }, height: { md: "100%", xs: '400px' },
  borderRadius: '20px',
}
export const cardstyle = {
  width: { md: '364px', sm: '205px', xs: '205px' },
  height: { md: '364px', sm: '205px', xs: '205px' },
  backgroundColor: "#bb71250d"
}

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div className="embla__slide" key={index}>
              <Box key={index} sx={{ backgroundImage: `url(${hovercardbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', p: '0px', ":hover": { p: '10px', transition: '0.2s', cursor: 'pointer' }, borderRadius: '28px', textDecoration: 'none' }} component={Link} to={`/${data.LinkName}`}>
                <Box sx={blockchainstyle}>
                  <Box sx={{ px: { md: "15px", sm: "65px", xs: "55px" }, pt: '20px' }}>
                    <Box component="img" src={data.img} sx={cardstyle} alt="icon" />
                  </Box>
                  <Box sx={{ px: "33px", pb: '30px' }}>
                    <Typography fontSize="24px" sx={{ color: "white", bottom: 0 }} gutterBottom>
                      {data.title}
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "14px" }} >
                      {data.content}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
