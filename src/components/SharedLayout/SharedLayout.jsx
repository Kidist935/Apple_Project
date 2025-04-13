import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import YoutubeVideos from '../YoutubeVideos/YoutubeVideos'

function SharedLayout() {
  return (
    <>
   <Header/>
   <Outlet/>
   <YoutubeVideos/>
   <Footer/>

    </>
  )
}

export default SharedLayout