import React from 'react';
import { Stack, Typography } from '@mui/material';

import muscleIcons from '../utils/muscleIcons';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const muscleImage = muscleIcons[item] || muscleIcons['default'];

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #5D3FD3', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        console.log(bodyPart)
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={muscleImage} alt="dumbbell" style={{ width: '70px', height: '70px' }} />
      <Typography fontSize="24px" fontWeight="bold" color="#301934" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart;
