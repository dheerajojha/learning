import React from 'react'
import {HomeBanner, Explore, Industrytab, Info, Populartraining,Trainingsolution, Testimonials, Trusted,Trainingpartners } from '../components/home'
const Home = () => {
  return (
   <>
   <HomeBanner/>
   <Populartraining/>
   <Trainingsolution/>
   <Explore/>
   {/* <Trainingpartners/> */}
   <Info/>
   <Industrytab/>
   <Trusted/>
   <Testimonials/>
   </>
  )
}

export default Home