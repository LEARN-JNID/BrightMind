import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import {GiSpellBook} from 'react-icons/gi'

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
      <div className='form-container'>
        <h3 id='form-title'>PostEdit</h3>
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
                  value={this.state.editedPost.title}
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
                  placeholder="body"
                  type="textarea"
                  onChange={this.handleChange}
                  value={this.state.editedPost.body}
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
