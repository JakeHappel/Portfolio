import React from "react";
var Potluck = require("../images/Potluck.png");
var NasaPhoto = require("../images/NasaPhoto.png");
const Projects = () => {
    return(
        <body>
        <div className="Projects">
        <img className="Potluck" src={Potluck} alt='Potluck'/>
        <img className="Nasa" src={NasaPhoto} alt='NasaPhoto'/>
        </div>
        </body>
    )
}
export default Projects