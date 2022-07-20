import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'
import {BsCalendar, BsClock} from 'react-icons/bs'
import {
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
  Modal,
  ModalHeader,
  ModalFooter
} from 'reactstrap';

export default class PostShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
        deleted: false,
        modal: false
    }
    this.toggleModal = this.toggle.bind(this);
  }

  handleDelete = () => {
        this.props.deletePost(this.props.post.id)
        this.setState({deleted: true})
    }

  toggle = () =>  {
    this.setState({
      modal: !this.state.modal
    });
  }

render() {
  if(this.state.deleted) {
    return(<Redirect to="/postindex" />)
  }
  console.log("THIS IS PROPS: ", this.props)
  return (
    <>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Are you sure you want to delete this journal?</ModalHeader>
        <ModalFooter>
          <Button id='s-d-button' onClick={this.handleDelete}>Forget Journal</Button>{' '}
          <Button id='s-c-button' onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    <div id='show-body'>   
      {this.props.logged_in &&
      <Card 
      id='show-card'
      style={{ width: '100%', height: 'fit-content'}}>
        <CardBody>
          <CardTitle id='show-title'>{this.props.post.title}</CardTitle>
          <CardSubtitle className='show-sub'>
          <BsCalendar id='show-icons'/>{` ${this.props.post.created_at.slice(0, 10)}`}</CardSubtitle>
          <CardSubtitle className='show-sub'>
          <BsClock id='show-icons'/>{` ${this.props.post.created_at.slice(11, 16)}`}</CardSubtitle>
          <div id='mood-div-c'>
            <CardSubtitle id='show-mood'>{this.props.post.mood}</CardSubtitle>
            <GoPrimitiveDot id='show-mood'/>
          </div>
          <CardText className='show-text'>{this.props.post.body}</CardText>
          <Button className='show-buttons'>
            <NavLink id='navlink-show' to={'/postindex'}> Go Back </NavLink>
          </Button>
          <Button className='show-buttons'>
            <NavLink id='navlink-show' to={`/postedit/${this.props.post.id}`}> Edit Entry </NavLink>
          </Button>
          <Button className='show-buttons' onClick={this.toggle}>
            Forget Entry
          </Button>
        </CardBody>
      </Card>
      }
    </div>
  </>
    )
  }
}
