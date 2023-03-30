import React from 'react'
import {Box, Card, CardMedia, CardContent, Typography} from '@mui/material'
import { demoChannelTitle, demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'
import {CheckCircle} from '@mui/icons-material'
const ChannelCard = ({ channelCard, marginTop}) => {
  return (
   <Box sx={{ boxShadow:"none", borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", width: {xs: "356px", md: "320px"}, height: "326px", margin:"auto", marginTop: marginTop }}>
    <Link to={`/channel/${channelCard?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', justifyContent: "center", textAlign:"center", flexDirection: "column", color: "#fff"}}>
       <CardMedia 
       image={channelCard?.snippet?.thumbnails?.high?.url || demoProfilePicture}
       alt={channelCard?.snippet?.title}
       sx={{ width: "180px", height: "180px", borderRadius: "50%", mb: 2, border: '1px solid #e3e3e3'}}/>
       <Typography variant='h6'>
        {channelCard?.snippet?.title}
        <CheckCircle sx={{color: 'grey' , ml: '5px', fontSize: 14}}/>
       </Typography>
       <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelCard?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
      </CardContent>
    </Link>
   </Box>
  )
}

export default ChannelCard;