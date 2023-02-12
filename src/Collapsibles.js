import React, { useState } from "react";

const Collapsibles = () => {
  const toggle = () => {
    setOPen(!open);
  };

  const [open, setOPen] = useState(false);

  return ( 
    <div className="collapsible">
      <div className="collapsible-header">
        <img onClick={toggle} className="page-menu" src="./menu.svg" alt=""/>
      </div>
      { open &&
      <div className="collapsible-content toggle">
        <div className="collapsible-item">HOSTING</div>
        <div className="collapsible-item">VPS</div>
        <div className="collapsible-item">DOMAIN</div>
        <div className="collapsible-item">PRICING</div>
      </div>
      }
    </div>
   );
}
 
export default Collapsibles;