import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn,FaInstagramSquare } from 'react-icons/fa';

class Icons extends Component {
  render() {
    return (
    <div className='Icons'>
        <a className='Icon' href='https://github.com/JakeHappel'>
      <FaGithub icon={FaGithub} size = '50px'/>
      </a>
      <a className='Icon' href='https://www.linkedin.com/in/jakehappel/'><FaLinkedinIn icon={FaGithub} size = '50px'/></a>
      <a className='Icon' href='https://www.linkedin.com/in/jakehappel/'><FaInstagramSquare icon={FaGithub} size = '50px'/></a>
    </div>
    ) 
  }
}

export default Icons