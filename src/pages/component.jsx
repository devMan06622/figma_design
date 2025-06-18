import { Grid, Box, Chip, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const WhyChooseChainsecurity = (props) => {
  const data = props.data;
  return (
    <>
      {
        data.map((datas, index) => (
          <Grid sx={{flexDirection: {md: index%2===0 ? 'row' : 'row-reverse', sm: 'column', xs: 'column'}}} id={index} key={index} container spacing={{ md: 3, sm: 2, xs: 0 }} alignItems="center" direction={{ md: "row", sm: "column", xs: "column" }}>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" } }}>
              <Box component="img" src={datas.icon} alt="Check Blockchain Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item size={6} sx={{ width: { md: "48%", xs: "100%" }, textAlign: { md: 'left', sm: 'center', xs: 'center' },px:{md:0,sm:2,xs:'16px'} }}>
              <Chip label="Blockchain Address" sx={{ bgcolor: '#23222a', color: '#bdbdbd', p: '21px',borderRadius:'51px', fontSize: '14px', mb: "20px" }} />
              <Typography variant="h4" fontWeight={700} mb={2}>{datas.title}</Typography>
              <Typography variant="body1" mb={4}>
                {datas.content}
              </Typography>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{ 
                size: {md:'14px',xs:'12px'}, 
                borderRadius: 8, 
                px: { md: 5, sm: 4, xs: 5 }, 
                py: { md: 2, sm: '10px', xs: '13px' }, 
                background: { 
                  md: index%2===0 ? 'white' : 'linear-gradient(308.69deg, #FF8629 63.74%, #FFD729 92.78%)',
                  sm: 'white',
                  xs: 'white'
                }, 
                color: { 
                  md: index%2===0 ? 'black' : 'white',
                  sm: 'black',
                  xs: 'black'
                } ,
                mb:'24px'
              }}>{datas.button}</Button>
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}