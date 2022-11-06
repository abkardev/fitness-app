import React, {useState} from 'react';
import {Box , Stock, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
    return (
        <Box xs={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }} position="relative" p="20px"
        >
           <Typography color="#ff2625"
           fontWeight="600" fontSize="26px"
           >
            Fitness Club
           </Typography> 
           <Typography fontWeight={600}
           sx={{ fontSize: {lg: '44px', xs: '40px'}}}
           mb="23px" mt="30px"
           >
            Sweet, Smile <br/> and Request
           </Typography>
           <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
           </Typography> 
           <Button variant="contained" color="error" 
           href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '15px'}}
           >
            Explore Exercises
           </Button>
           <Typography fontWeight={600}
             color="#ff2625"
             sx={{ opacity: 0.1, display: {lg: 'block', xs: 'none'}}}
             mb="23px" mt="30px"
             fontSize="200px"
           >
            Exercises
           </Typography>
           <img  src={HeroBannerImage} alt="banner"
            className="hero-banner-img"
           />
        </Box>
    )
}

export default HeroBanner;