import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';


// Create a Header.jsx component that renders a <header> element
// to show the Keeper App name in an <h1>.

function Header() {
  return (
    <header className="header">
      <h1 className="header h1"><HighlightIcon/> Keeper</h1>
    </header>
  );
}
export default Header;
