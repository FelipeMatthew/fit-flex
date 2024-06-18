import React from 'react'

import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#FFF3F4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo'  width='100px' height='auto'/>
        <Typography variant='h5' pb='40px'>
          Made by Felipe Matthew - Inspired by JSM
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer