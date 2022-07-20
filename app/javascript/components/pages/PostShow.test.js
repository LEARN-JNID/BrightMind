// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import PostShow from './PostShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When PostShow renders", () => {
  let logged_in = true
  let postShowRender 
  beforeEach(() => {
      let post = {
        title: "Title",
        create_at: "Today",
        mood: "mood",
        body: "Description"
      }
       postShowRender = shallow(<PostShow logged_in={logged_in} post={post} />)
    })
    it("displays a heading", () => {
      const postShowHeading = postShowRender.find("div")
      expect(postShowHeading.length).toEqual(1)
    })
    it("displays a button", () => {
      const postShowHeading = postShowRender.find("button")
      expect(postShowHeading.length).toEqual(1)
    })
    it('Test click event', () => {
      const mockCallBack = jest.fn()
  
      const button = shallow((<button onClick={mockCallBack}>Delete</button>))
      button.find('button').simulate('click')
      expect(mockCallBack.mock.calls.length).toEqual(1);
    })
  })