import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <div id='intro-text'>
            <h1 id='intro-h1'>
             Welcome to Bright Mind
              </h1>
            <h4 id='intro-h4'>An online journaling and mood tracker app</h4>
        </div>
        <div id='home-body-c'>
          <div className='body-demo'>
            <div className='demo-info'>
              <h2 className='demo-title'>Demo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img className='img-demo' src='https://freesvg.org/img/Placeholder.png' alt="gif demo"/>
          </div>
          <div className='body-demo' >
            <img className='img-demo' src='https://freesvg.org/img/Placeholder.png' alt="gif demo"/>
            <div className='demo-info'>
              <h2 className='demo-title'>Demo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
