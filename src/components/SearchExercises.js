import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    // If dont have search show all exercises
    if(!search) {
      // const exercisesData = await fetchData()
    }
  }

  return (
    <Stack 
      alignItems='center' mt='37px'
      justifyContent='center' p='20px'
    >
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }}>
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: { 
              fontWeight: '700',
              border: 'none', 
              borderRadius: '4px',
            },
            width: { lg: '900px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '40px'
            
          }}
          placeholder='Search Exercises'
          type='text'
          height='76px' 
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button className='search-btn' sx={{
            backgroundColor: '#FF2625', 
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '18px' },
            height: '56px',
            position: 'absolute',
            right: '0',
            marginLeft: '16px'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        
      </Box>
    </Stack>
  )
}

export default SearchExercises