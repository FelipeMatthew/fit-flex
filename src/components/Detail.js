import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    },
  ]

  return (
    <Stack
      id='exercises'
      gap='60px' 
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px', 
        alignItems: 'center'
      }}
    >
      <img src={gifUrl} alt={name} className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3' textTransform='capitalize' color='#5D3FD3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercise keep you strong {name}{` `}
          is one of best exercise to target your {target}.
          It will help you to improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{ 
                background: '#CBC3E3',
                borderRadius: '50%',
                width: '100px', 
                height: '100px'
              }}
            >
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography variant='h5' textTransform='capitalize' color='#301934'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail