import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

function Videos({videos, direction}) {
  
  if(!videos?.length) return 'loading...';

  return (
    <Stack 
    direction={ direction || "row" }
    flexWrap="wrap"
    justifyContent="start" 
    gap={2}>
       {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail/>}
        </Box>
       ))}
    </Stack>
  )
}

export default Videos
