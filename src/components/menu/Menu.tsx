import React from "react";
import {Link} from "react-router-dom";


const Menu = () => {
  return (
      <div>
        <ul>
            <li><Link to={'/'}/></li>
            <li><Link to={'quotes'}/></li>
        </ul>
      </div>

  )
}

export default Menu;