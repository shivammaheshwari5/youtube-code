import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import Feed from './component/Feed'
import VideoDetails from './component/VideoDetails'
import ChannelDetails from './component/ChannelDetails'
import Search from './component/Search'
import Navbar from './component/Navbar'
const  App = () => {
  return (
   <BrowserRouter>
   <Box sx={{'background': '#000'}}>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' exact element={<VideoDetails/>}/>
        <Route path='/channel/:id' exact element={<ChannelDetails/>}/>
        <Route path='/Search/:searchTerm' exact element={<Search/>}/>

    </Routes>
   </Box>
   </BrowserRouter>
  )
}

export default App