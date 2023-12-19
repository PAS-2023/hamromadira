import React from 'react';
import "./dashboard.css"

const Menu = () => {
    const menuItem=["DashBoard","Add Product","Customer","Order","Comments","SignOut"]
  return (
    <>
      <div className="sidebox">
        <div className="menu">
          {menuItem.map((item) => {
            return (
              <>
                <span> { item}</span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
