import React, { useEffect, useState } from 'react'

import {Videos, ChannelCard} from './'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { Box } from '@mui/material'

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {
      setChannelDetail(data?.items[0])
    })

    fetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
    .then((data) => {
      setVideos(data?.items)
    })
  }, [id])
  return (
    <Box height="95vh">
    <Box>
      <div
       style={{
        background: 'linear-gradient(90deg, rgba(22,224,245,1) 0%, rgba(228,87,244,1) 100%, rgba(235,0,255,1) 100%)',
        zINdex: 10,
        height: "300px"
       }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
    </Box>
    <Box display="flex" p="2">
      <Box sx={{mr: {sm: "100px"}}}/>
       <Videos videos={videos}/>
    </Box>
    </Box>
  )
}

export default ChannelDetail
