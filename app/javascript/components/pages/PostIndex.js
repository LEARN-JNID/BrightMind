import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';

export default class PostIndex extends Component {
  render() {
    const {posts} = this.props
    return (
      <>
        <h3>My Journal's</h3>
        <div className='index-container'>
          {posts &&
           posts.map((currentPost, index)=> {
            return ( 
              <Card 
              style={{ width: '20rem' }} 
              key={index} 
              id='index-cards'>
                {/* <CardImg /> we'll come back to this */} 
                <CardBody>
                  <CardTitle>{currentPost.title}</CardTitle>
                  <CardSubtitle>{currentPost.mood}</CardSubtitle>
                  <CardText>{currentPost.body}</CardText>
                </CardBody>
                <Button>
                  <NavLink to={`/postshow/${currentPost.id}`}>
                    View Entry
                   </NavLink>
              </Button>
              </Card>
              )
            })
          }
        </div>
      </>
    )
  }
}