import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { demoVideoUrl, demoChannelUrl,demoChannelTitle, demoVideoTitle, demoProfilePicture, demoThumbnailUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
<Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ?  `/video/${videoId}` : demoVideoUrl}>
    <CardMedia  image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
      alt={snippet?.title}  sx={{width: 358, height: 180}}>
   
    </CardMedia>
    </Link>
    <CardContent sx={{background: '#1e1e1e', height: '106px'}}>
    <Link to={videoId ?  `/video/${videoId}` : demoVideoUrl}>
    <Typography fontWeight='bold' color='#fff' variant='subtitle1'>
      {snippet?.title.slice(0, 60) || demoVideoTitle} 
    </Typography>
    </Link>
    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
    <Typography fontWeight="bold" color="grey" variant='subtitle2'>
      {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
      <CheckCircle sx={{color: 'grey' , ml: '5px', fontSize: 12}}/>
    </Typography>
    </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard;