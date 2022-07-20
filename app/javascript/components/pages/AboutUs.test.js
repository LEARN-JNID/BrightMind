// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import AboutUs from './AboutUs' 

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When AboutUs renders", () => {
  let aboutUsRender
  beforeEach(() => {
    aboutUsRender = shallow(<AboutUs />)
  })
    it("displays a heading", () => {
      const aboutUsHeading = aboutUsRender.find("h3").text()
      expect(aboutUsHeading).toEqual("About Us")
    })
    it("displays a card from reactstrap per post", () => {
      const aboutUsCard  = aboutUsRender.find("Card")
      expect(aboutUsCard.length).toEqual(4)
    })
    it("displays a card title from reactstrap per post", () => {
      const aboutUsCard  = aboutUsRender.find("CardTitle")
      expect(aboutUsCard.length).toEqual(4)
    })
    it("displays a card subtitle from reactstrap per post", () => {
      const aboutUsCard  = aboutUsRender.find("CardSubtitle")
      expect(aboutUsCard.length).toEqual(4)
    })
    it("displays a card text from reactstrap per post", () => {
      const aboutUsCard  = aboutUsRender.find("CardText")
      expect(aboutUsCard.length).toEqual(4)
    })
  })