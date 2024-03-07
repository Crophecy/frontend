import React from 'react'
import Team from '../components/About/teamComp'
import WelcomeText from '../components/About/welcomeText'
import ContactForm from '../components/About/contactForm'
import Footer from '../components/About/footer'
import Header from '../components/Header/header'


const About = () => {
  return (
    <div>
        <Header/>
        <WelcomeText/>
        <Team/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default About