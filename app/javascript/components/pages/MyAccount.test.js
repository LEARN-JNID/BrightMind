// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import MyAccount from './MyAccount'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When MyAccount renders", () => {
  let myAccountRender
  let post = {
    title: "Title",
    create_at: "Today",
    mood: "mood",
    body: "Description"
  }
  beforeEach(() => {
    
    myAccountRender = shallow(<MyAccount post={post}/>)
  })
    it("displays a heading", () => {
      const accountHeading = myAccountRender.find("h3").text()
      expect(accountHeading).toEqual("My Account")
    })

    it("creates a Chart", () => {
      const accountChart  = myAccountRender.find("Chart")
      expect(accountChart.length).toEqual(1)
    })

    it("creates a div to contain quotes", () => {
      const accountChart  = myAccountRender.find("[id='quotes']")
      expect(accountChart.length).toEqual(1)
  })

  it("creates a div to contain a few user posts", () => {
    const accountChart  = myAccountRender.find("[id='posts']")
    expect(accountChart.length).toEqual(1)
})
  })