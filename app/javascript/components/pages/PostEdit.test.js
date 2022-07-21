// Imports React into our test file.
import React from 'react'
import { 
  cleanup, 
  fireEvent, 
  render 
} from "@testing-library/react";
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'


// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import PostEdit from './PostEdit'



//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("When PostEdit renders", () => {
  let successChecker = false
  let successFn = ()=>{
    successChecker = true
  }
  let postEditRender
  beforeEach(() => {
    let post = {
      id:1,
      title:"string",
      mood:"string",
      body:"string",
      color:"string"
    }
    postEditRender = shallow(<PostEdit post={post}  editPost={successFn}/>)
  })
    it("displays a heading", () => {
      const postEditHeading = postEditRender.find("h3").text()
      expect(postEditHeading).toEqual("Edit Entry")
    })
    it("creates a Edit entry", () => {
      const postEditForm = postEditRender.find("Form")
      expect(postEditForm.length).toEqual(1)
    })
    it("displays an input for title", () => {
      const postEditForm = postEditRender.find("[name='title']")
      expect(postEditForm.length).toEqual(1)
    })
    it("displays an input for mood", () => {
      const postEditForm = postEditRender.find("[name='mood']")
      expect(postEditForm.length).toEqual(1)
    })
    it("displays an input for body", () => {
      const postEditForm = postEditRender.find("[name='body']")
      expect(postEditForm.length).toEqual(1)
    })
    it('should call state', () => {
      postEditRender.find('#btn').simulate('click')
      expect(successChecker).toEqual(true)
    })
    it('should call state for input', () => {
      const event = {target: {name: "title", value: "spam"}};
      postEditRender.find('[name="title"]').simulate('change', event)
      expect(postEditRender.state('editedPost').title).toEqual("spam")
    })
  })