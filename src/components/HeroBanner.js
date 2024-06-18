import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      display: { lg: 'block', md: 'none' },
      mt: { lg: '185px', xs: '70px' },
      ml: { sm: '50px' },
      position: 'relative',
      p: '20px',
      mb: '80px',
      mt: '30px'
    }}>
      <Typography color='#5D3FD3' fontWeight='600' fontSize='26px'>
        Fit Flex
      </Typography>

      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>
        Checkout the most effect exercises
      </Typography>

      <Button variant='contained' color='secondary' href='#exercises' sx={{
        backgroundColor: '#5D3FD3',
        padding: '15px',
        fontWeight: '600'
      }}>
        Explore exercises
      </Button>

      <Box 
        component="img"
        src={HeroBannerImage}
        alt="Banner"
        sx={{
          position: 'absolute',
          display: { xs: 'none', lg: 'block' },
          top: -100,
          right: 100,
          width: { lg: 'auto', xs: '100%' },
          height: '85vh',
          objectFit: 'cover',
          borderRadius: '40px',
          zIndex: 1
        }}
      />

      <Typography 
        fontSize='200px'
        zIndex={-1}
        fontWeight={600} 
        color='#5D3FD3' 
        sx={{ opacity: 0.3, display: { lg: 'block', xs: 'none'}}}
      >
        Exercise
      </Typography>
    </Box>
  )
}

export default HeroBanner
