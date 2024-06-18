import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{
      mt: { lg: '60px', xs: '0' }
    }}>
      {/* Similar muscles */}
      <Typography variant='h3'>
      Exercises that target the same <span style={{ color: '#5D3FD3' }}>muscle group</span> 
      </Typography>
      <Stack direction='row' mt='40px' sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      {/* Similar Equipment */}
      <Typography variant='h3' mt='40px'>
        Exercises that use the same <span style={{ color: '#5D3FD3' }}>equipment</span> 
      </Typography>
      <Stack direction='row' mt='40px' sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises 