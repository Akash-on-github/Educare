import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programmes from './components/programmes/programmes'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
 const App = () => {

const[playState, setPlayState] = useState(false);


   return (
     <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR PROGRAMMES' title='What We Offer'/>
      <Programmes/>
      <About playState={playState} setPlayState={setPlayState}/>
      <Title subTitle='GALLERY' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Students Say'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
     </div>
   )
 }
 
 export default App
 