import React, { Component } from 'react'
import {AiOutlineCopyrightCircle, AiFillGithub} from 'react-icons/ai'

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <div id='footer-container'>
        <p id='footer-text'>
          <span>
          <AiOutlineCopyrightCircle id='footer-icons'/>
          </span>
            Copyright JNID
        </p>
        <p id='footer-text'>
          <a href='https://github.com/LEARN-JNID/BrightMind'target='_blank'>
          <AiFillGithub id='footer-icons' />
          </a>
        </p>
        </div>
      </div>
     
      
    )
  }
}
