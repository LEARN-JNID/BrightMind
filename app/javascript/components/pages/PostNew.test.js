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
  let postNewRender
  beforeEach(() => {
    postNewRender = shallow(<PostNew />)
  })
    it("displays a heading", () => {
      const postNewRender = shallow(<PostNew />)
      const postNewHeading = postNewRender.find("h3").text()
      expect(postNewHeading).toEqual("PostNew")
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
    it('Test click event', () => {
      const mockCallBack = jest.fn()

      const button = shallow((<button onClick={mockCallBack}>Submit</button>))
      button.find('button').simulate('click')
      expect(mockCallBack.mock.calls.length).toEqual(1)
    })
  })