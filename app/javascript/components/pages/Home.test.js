// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'



//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  let homeRender
  beforeEach(() => {
    homeRender = shallow(<Home />)
  })
    it("displays a heading", () => {
      const homeHeading = homeRender.find("[id='intro-h1']").text()
      expect(homeHeading).toEqual("Welcome to Bright Mind")
    })
    it("displays a demo", () => {
      const homeDemo = homeRender.find("[className='demo-title']")
      expect(homeDemo.length).toEqual(2)
    })
    it("displays an intro", () => {
      const homeIntro = homeRender.find("[id='intro-h4']").text()
      expect(homeIntro).toEqual("An online journaling and mood tracker app")
    })
    it("displays the info", () => {
      const homeIntro = homeRender.find("[className='demo-info']")
      expect(homeIntro.length).toEqual(2)
    })
  })