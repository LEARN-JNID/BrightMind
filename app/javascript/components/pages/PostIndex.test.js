// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import PostIndex from './PostIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When PostIndex renders", () => {
  let successChecker = false
  let successFn = ()=>{
    successChecker = true
  }
  const props ={
    posts: [{
      title:"string",
      mood:"string",
      body:"text"
    }]
  }
  let postIndexRender
  beforeEach(() => {
    postIndexRender = shallow(<PostIndex {...props} filterChoice= {successFn}/>)
  })
    it("displays a heading", () => {
      const postIndexRender = shallow(<PostIndex />)
      const postIndexHeading = postIndexRender.find("h3").text()
      expect(postIndexHeading).toEqual("My Journal's")
    })
    it("displays a card from reactstrap per post", () => {
      const postIndexCard  = postIndexRender.find("Card")
      expect(postIndexCard.length).toEqual(1)
    })
    it('should call state', () => {
      postIndexRender.find('select').simulate('click')
      expect(successChecker).toEqual(true)
    })
  })