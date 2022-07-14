import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class PostEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
        editedPost: {
          title: '',
          mood: 'Happy',
          body: ''
         },
        submitted: false
    }
  }

  componentDidMount = () => {
    this.setState({editedPost: this.props.post})
  }

  handleChange = (e) => {
    let targetValue = e.target.value 
    let targetName = e.target.name
    let { editedPost } = this.state
    editedPost[targetName] = targetValue
    console.log(targetValue)
    this.setState({editedPost: editedPost})
  }

  handleSubmit = () => {
    this.props.editPost(this.state.editedPost, this.props.post.id)
    this.setState({submitted: true})
  }
  
  render() {
    if (this.state.submitted) {
      return (<Redirect to={'/postindex'} />);
  }
    return (
      <>
        <h3>PostEdit</h3>
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
                  value={this.state.editedPost.title}
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
                  value={this.state.editedPost.body}
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
