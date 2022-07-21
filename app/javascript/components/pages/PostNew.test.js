// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import PostNew from './PostNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When PostNew renders", () => {
  let successChecker = false
  let successFn = ()=>{
    successChecker = true
  }
  let postNewRender
  beforeEach(() => {
    postNewRender = shallow(<PostNew newPost={successFn} />)
  })
    it("displays a heading", () => {
      const postNewHeading = postNewRender.find("h3").text()
      expect(postNewHeading).toEqual("Create an Entry")
    })
    it("creates a new entry", () => {
      const postNewForm  = postNewRender.find("Form")
      expect(postNewForm.length).toEqual(1)
    })
    it("displays an input for title", () => {
      const postNewForm = postNewRender.find("[name='title']")
      expect(postNewForm.length).toEqual(1)
    })
    it("displays an input for mood", () => {
      const postNewForm = postNewRender.find("[name='mood']")
      expect(postNewForm.length).toEqual(1)
    })
    it("displays an input for body", () => {
      const postNewForm = postNewRender.find("[name='body']")
      expect(postNewForm.length).toEqual(1)
    })
    it("displays a submit button", () => {
      const postNewForm = postNewRender.find("[id='btn']")
      expect(postNewForm.length).toEqual(1)
    })
    it('should call state for input', () => {
      const event = {target: {name: "title", value: "spam"}};
      postNewRender.find('[name="title"]').simulate('change', event)
      expect(postNewRender.state('newPost').title).toEqual("spam")
    })
    t('should call state', () => {
      postEditRender.find('#btn').simulate('click')
      expect(successChecker).toEqual(true)
    })
  })