import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const numberOfVideos = 3;

  if(!exerciseVideos.length) return <Loader/>;

  return (
    <Box sx={{ marginTop: { lg: '60px', xs: '20px' }}} p='20px'>
      <Typography variant='h3' mb='40px'>
          Watch <span style={{ color: '#5D3FD3', textTransform: 'capitalize' }}>{name}</span> videos
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
            <Box>
              <Typography variant='h5' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#808080'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos