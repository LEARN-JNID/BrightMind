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
        created_at: "Tue, 19 Jul 2022 22:31:13.960454000 UTC +00:00",
        mood: "mood",
        body: "Description"
      }
       postShowRender = shallow(<PostShow logged_in={logged_in} post={post} />)
    })
    it("displays a body", () => {
      const postShowHeading = postShowRender.find("[id='show-body']")
      expect(postShowHeading.length).toEqual(1)
    })
    it("displays a button", () => {
      const postShowHeading = postShowRender.find("[className='show-buttons']")
      expect(postShowHeading.length).toEqual(3)
    })
  })