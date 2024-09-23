import React, { useRef } from 'react'
import Nav from './components/Nav'
import phool from './assets/file.png'
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CenterText from './components/CenterText';
import Paragraph from './components/Paragraph';
import Bottom from './components/Bottom';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const imageRef = useRef(null)
  const mainRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function (){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        markers: false,
        start: "top 0",
        end: "top -1500",
        scrub: 1,
      }
    })

    tl.to(imageRef.current,{
      transform: 'translateY(-20%)',
      duration: 1
    })
    tl.to(imageRef.current,{
      transform: 'translateY(-20%) scale(0.75)',
      duration: 1
    })
  })

  return (
    <div ref={mainRef} className='bg-[salmon] min-h-screen w-full'>
      <Nav />
      <div id="center" className='relative'>
        < CenterText />
        < Paragraph />
        < Bottom />
        <img ref={imageRef} src={phool} alt="" className='top-0 left-0 fixed h-[77vw]' />
      </div>
    </div>
  )
}

export default App