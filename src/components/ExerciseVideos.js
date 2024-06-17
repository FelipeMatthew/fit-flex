import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const numberOfVideos = 3;

  if(!exerciseVideos.length) return <Loader/>;

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }}} p='20px'>
      <Typography variant='h3'>
          Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> videos
      </Typography>
      <Stack 
        justifyContent='flex-start' 
        flexWrap='wrap' 
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: 0 }
        }}
      >
        {exerciseVideos?.slice(0, numberOfVideos).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos