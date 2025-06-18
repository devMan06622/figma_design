import { Stack, Button } from '@mui/material';

export const SeeAllBtn = () => {
  return (
    <Stack alignItems="center">
      <Button variant="contained" sx={{ borderRadius: '30px', px: {md:'65px',sm:'40px',xs:'43px'}, py: {md:'18px',sm:'10px',xs:'14px'}, bgcolor: 'white', color: 'black', fontWeight: 600, textTransform: 'none', fontSize: '14px' }}>See All Features</Button>
    </Stack>
  )
}