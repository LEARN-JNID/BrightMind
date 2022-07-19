import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'

export default class PostNew extends Component {
  constructor(props){
    super(props)
    this.state = {
        newPost: {
          title: '',
          mood: 'Happy',
          body: '',
          color: 'teal'
         },
        submitted: false
    }
  }

  handleChange = (e) => {
    
    let targetValue = e.target.value 
    let targetName = e.target.name
    let { newPost } = this.state
    console.log(targetName)
    console.log(targetValue)
    if(targetName == "mood"){
      if(targetValue == "Happy"){
        newPost['color'] = "teal"
        newPost[targetName] = targetValue
      } else if(targetValue =="Good"){
        newPost['color'] = "green"
        newPost[targetName] = targetValue
      } else if(targetValue =="Okay"){
        newPost['color'] = "blue"
        newPost[targetName] = targetValue
      } else if(targetValue =="Sad"){
        newPost['color'] = "red"
        newPost[targetName] = targetValue
      } else if(targetValue =="miserable"){
        newPost['color'] = "purple"
        newPost[targetName] = targetValue
      }
      this.setState({newPost: newPost})
    } else {
      newPost[targetName] = targetValue
      this.setState({newPost: newPost})
    }
  }

  handleSubmit = () => {
    console.log("NEW POST", this.state.newPost)
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
        <Form style={{backgroundColor: this.state.color}}>
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
              <Label for="mood">Mood  <GoPrimitiveDot  style={{color: this.state.newPost.color}}  id='post-icon'/> </Label>
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
