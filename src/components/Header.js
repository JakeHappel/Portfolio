import React from "react";
import {Link} from "react-router-dom"
var Jakenobg = require("../images/Jake_removebg.png");

const Header = () => {
    return(
    <header>
      <img className="Jake" src={Jakenobg} alt='Jake' />
            <nav>
              <Link className="navbar" to="/">Home</Link>
              <Link className="navbar" to="/">Contact</Link>
            </nav>
          </header>
    )
}
export default Header