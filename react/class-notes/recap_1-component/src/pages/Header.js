<<<<<<< HEAD
import React from 'react';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
=======
import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import headerImg from "../img/headers.jpeg";

const Header = () => {
  const handleClick = () => {
    alert("Header sayfasını detalarına yönlendirliyorsunuz");
  };

  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={headerImg} />
      <Buton name="header" click={handleClick} color="white" bgColor="black" />
    </div>
  );
};
>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17

export default Header;
