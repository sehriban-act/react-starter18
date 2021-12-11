// import React from 'react'
import PropTypes from "prop-types";

const Header = ({ title = "Task Tracker" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

//DEFAULT PROPS
// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
