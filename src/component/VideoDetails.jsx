import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Videos from './Videos'
import {CheckCircle} from "@mui/icons-material";
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'


const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams;
  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    },[id])
    console.log(videoDetail)
  return (
    <Box minHeight="95vh">
           <Stack direction={{ xs: "column", md: "row" }}>
           <Box flex={1}>
           <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=7ghhRHRP6t4`} className="react-player" controls/>
           </Box>
           </Box>
           </Stack>
    </Box>
  )
}

export default VideoDetails;