import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {GiSpellBook} from 'react-icons/gi'
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
      } else if(targetValue =="Miserable"){
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
      <div className='form-container'>
        <h3 id='form-title'>Create an Entry</h3>
        <Form id='form-body'>
          <div id='top-group-c'>
            <FormGroup id='top-group'>
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
            <FormGroup id='top-group'>
                 <Label for="mood">Mood  <GoPrimitiveDot  style={{color: this.state.newPost.color}}  id='post-icon'/> </Label>
                  <Input onChange={this.handleChange} type="select" name="mood" id="exampleSelect">
                    <option>Happy</option>
                    <option>Good</option>
                    <option>Okay</option>
                    <option>Sad</option>
                    <option>Miserable</option>
                  </Input>
            </FormGroup>
          </div>
          <FormGroup>
              <Label for="body">
                  Body
              </Label>
              <Input
                  id='form-text'
                  rows="10"
                  name="body"
                  placeholder="Body"
                  type="textarea"
                  onChange={this.handleChange}
                  value={this.state.newPost.body}
                />
          </FormGroup>
          <Button id="btn" onClick={this.handleSubmit}>
            <GiSpellBook id="send" aria-hidden="true"/>
            <GiSpellBook id="send2" aria-hidden="true"/>
            <p>publish</p>
          </Button>
        </Form>
      </div>
    )
  }
}
