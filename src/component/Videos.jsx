import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

import { Stack, Box } from '@mui/system'

const Videos = ({videos, direction}) => {
    console.log(videos)
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" gap={2} justifyContent="start">
      {videos.map((item,idx) => (
             <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelCard={item}/>}
             </Box>
        ))}
   
   </Stack>
  )
}

export default Videos