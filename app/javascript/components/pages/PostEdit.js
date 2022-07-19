import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'

export default class PostEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
        editedPost: {
          title: '',
          mood: '',
          body: '',
          color: ''
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
    if(targetName == "mood"){
      if(targetValue == "Happy"){
        editedPost['color'] = "teal"
        editedPost[targetName] = targetValue
      } else if(targetValue =="Good"){
        editedPost['color'] = "green"
        editedPost[targetName] = targetValue
      } else if(targetValue =="Okay"){
        editedPost['color'] = "blue"
        editedPost[targetName] = targetValue
      } else if(targetValue =="Sad"){
        editedPost['color'] = "red"
        editedPost[targetName] = targetValue
      } else if(targetValue =="miserable"){
        editedPost['color'] = "purple"
        editedPost[targetName] = targetValue
      }
      this.setState({editedPost: editedPost})
    } else {
      editedPost[targetName] = targetValue
      this.setState({editedPost: editedPost})
    }
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
              <Label for="mood">Mood  <GoPrimitiveDot  style={{color: this.state.editedPost.color}}  id='post-icon'/></Label>
                  <Input onChange={this.handleChange} type="select" name="mood" id="exampleSelect">
                    <option>-</option>
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
