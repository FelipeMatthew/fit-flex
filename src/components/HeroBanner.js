import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material' 
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '185px', xs: '70px' },
      ml: { sm: '50px' }
    }} position='relative' p='20px'
    mb='23px'
    mt='30px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>

      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>
        Checkout the most effect exercises
      </Typography>

      <Button variant='contained' color='error' href='#exercises' sx={{
        backgroundColor: '#FF2625',
        padding: '15px',
        fontWeight: '600'
      }}>
        Explore exercises
      </Button>

      <img 
        src={HeroBannerImage}
        alt="Banner"
        className='hero-banner-img'
        style={{ zIndex: 1, height: '870px', objectFit: 'contain' }} 
      />

      <Typography 
        fontSize='200px'
        zIndex={-1}
        fontWeight={600} 
        color='#FF2625' 
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none'}}}
      >
        Exercise
      </Typography>
    </Box>
  )
}

export default HeroBanner