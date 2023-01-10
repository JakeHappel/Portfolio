import React, { Component } from 'react';
import Icons from './Icons';

export class Home extends Component {
    render(){
    return(
        <body>
            <div className="Home">
            <div className="FirstP">
           <h2>Hello! I'm Jake a Web Developer</h2>
           <p>I'm fluent in HTML, CSS, and Javascript. I have found that nothing satisfies me more than project collaboration, cultivating new relationships, solving problems, and contributing to business growth through technology.</p>
           </div>
           <Icons />
           </div>
        </body>
    )
  }
}
export default Home