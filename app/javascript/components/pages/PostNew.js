import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class PostNew extends Component {
  constructor(props){
    super(props)
    this.state = {
        newPost: {
          title: '',
          mood: 'Happy',
          body: ''
         },
        submitted: false
    }
  }

  handleChange = (e) => {
    let targetValue = e.target.value 
    let targetName = e.target.name
    let { newPost } = this.state
    newPost[targetName] = targetValue
    console.log(targetValue)
    this.setState({newPost: newPost})
  }

  handleSubmit = () => {
    this.props.createPost(this.state.newPost)
    this.setState({submitted: true})
  }
  
  render() {
    if (this.state.submitted) {
      return (<Redirect to={'/postindex'} />);
  }
    return (
      <>
        <h3>PostNew</h3>
        <Form>
          <FormGroup>
              <Label for="title">
                  Title
              </Label>
              <Input
                  name="title"
                  placeholder="Title"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newPost.title}
                />
          </FormGroup>
          <FormGroup>
              <Label for="mood">Mood</Label>
                  <Input onChange={this.handleChange} type="select" name="mood" id="exampleSelect">
                    <option>Happy</option>
                    <option>Good</option>
                    <option>Okay</option>
                    <option>Sad</option>
                    <option>Miserable</option>
                  </Input>
          </FormGroup>
          <FormGroup>
              <Label for="body">
                  Body
              </Label>
              <Input
                  name="body"
                  placeholder="body"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newPost.body}
                />
          </FormGroup>
          <Button id="submit" onClick={this.handleSubmit}>
              Submit
          </Button>
        </Form>
      </>
    )
  }
}
