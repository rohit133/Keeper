import React from "react";


// Create a Footer.jsx component that renders a <footer> element
// to show a copyright message in a <p> with a dynamically updated 

function Footer() {
  return (
    <footer className="footer">
      <p>CopyRigt &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
