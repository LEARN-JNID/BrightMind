// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Services from './Services'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When PostIndex renders", () => {

  let servicesRender
  beforeEach(() => {
    servicesRender = shallow(<Services />)
  })
    it("displays a heading", () => {
      const servicesRender = shallow(<Services />)
      const servicesHeading = servicesRender.find("h1").text()
      expect(servicesHeading).toEqual("Services")
    })
    it("displays a card from reactstrap per post", () => {
      const servicesCard  = servicesRender.find("Card")
      expect(servicesCard.length).toEqual(8)
    })
  })