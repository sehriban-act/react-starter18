<<<<<<< HEAD
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Welcome name/>
    </div>
  );
}
=======
import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import aboutImg from "../img/aboutt.jpeg";
const About = () => {
  const handleClick = () => {
    alert("About sayfasının detaylarına yönlendirliyorsunuz");
  };

  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Buton name="about" click={handleClick} color="white" bgColor="red" />
    </div>
  );
};
>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17

export default About;
