import React from 'react'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import {Box} from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI'
function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id} = useParams();
useEffect(() =>{
  FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
    setChannelDetails(data?.items[0])
  })
  FetchFromAPI(`search?chennelId=${id}&part=snippet&order=date`).then((data) => {
    setVideos(data?.items)
  })
},[id])
console.log(channelDetails)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: "rgb(162,58,180)",
background: "linear-gradient(90deg, rgba(162,58,180,1) 0%, rgba(107,29,253,0.9950105042016807) 1%, rgba(211,133,221,1) 93%)",zIndex: 10, height: "300px"}}></div>
    <ChannelCard channelCard={channelDetails} marginTop="-93px"  />
      </Box>
      <Box  p={2} display="flex">
       <Box sx={{mr: {sm: "100px"}}}>
        <Videos videos={videos}/>
       </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetails;