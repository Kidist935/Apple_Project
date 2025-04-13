import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import YoutubeVideos from './components/YoutubeVideos/YoutubeVideos'
import MainSection from './components/MainSection/MainSection'
import Mac from './Pages/Mac/Mac'
import Iphone from './Pages/Iphone/Iphone'
import Ipad from './Pages/Ipad/Ipad'
import Watch from './Pages/Watch/Watch'
import Tv from './Pages/TV/Tv'
import Music from './Pages/Music/Music'
import Support from './Pages/Support/Support'
import Search from './Pages/Search/Search'
import Cart from './Pages/Cart/Cart'
import { Route, Routes } from 'react-router'
import SharedLayout from './components/SharedLayout/SharedLayout'
import FourO4 from './Pages/FourO4/FourO4'
import LearnMore from './Pages/Iphone/LearnMore'


// import { Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
  
    <Routes>
    <Route path='/' element={ <SharedLayout />}>
    <Route path='/' element={<MainSection />}/>
    <Route path='/' element={<YoutubeVideos />}/>
    
    <Route path='mac' element={<Mac />}/>
    <Route path='iphone' element={<Iphone />}/>
    <Route path='ipad' element={<Ipad />}/>
    <Route path='watch' element={<Watch />}/>
    <Route path='tv' element={<Tv />}/>
    <Route path='music' element={<Music />}/>
    <Route path='support' element={<Support />}/>
    <Route path='search' element={<Search />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='/product/:id' element={<LearnMore/>}/>
    <Route path='*' element={<FourO4 />}/>

    </Route>
    </Routes>

    {/* <YoutubeVideos/> */}
    </>


  )
}

export default App
