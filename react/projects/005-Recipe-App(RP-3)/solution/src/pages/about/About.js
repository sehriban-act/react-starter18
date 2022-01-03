import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/coding.svg"
<<<<<<< HEAD
=======

>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17
const About = () => {
    return (
      <AboutContainer>
          <StyledImage src={codingSvg}/>
          <HeaderContainer>
          <h1>About Software Developer <span>Helen Kuttery</span> </h1>
          </HeaderContainer>
          <InfoContainer>
          <h2>Hi, I'am Helen</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.</h4>
          <h2>
          <a href="mailto:helen@clarusway.com">Send email</a> :
          helen@clarusway.com
        </h2>
          </InfoContainer>
      </AboutContainer>
    )
}
export default About




