import React from 'react'
import "../components/css/Style.css"
import Header from './Header'
import Spotlight from './Spotlight'
import Section from './Section'
import SectionTwo from './SectionTwo'
import Sectionthree from './Sectionthree'
import Location from './Location'
import SectionLast from './SectionLast'
import Footer from './Footer'
import BoxGrid from './BoxGrid'
const Home = () => {
  return (
    <div>
      <Header />
      <Spotlight />
      <Section />
      <BoxGrid />
      <SectionTwo/>
      <Sectionthree />
      <Location />
      <SectionLast/>
      <Footer/>
    </div>
  )
}

export default Home
