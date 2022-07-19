import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {GiSpellBook} from 'react-icons/gi'

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
      <div className='form-container'>
        <h3 id='form-title'>PostNew</h3>
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
                <Label for="mood">Mood</Label>
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
