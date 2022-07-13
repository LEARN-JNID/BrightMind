import React, { Component } from 'react'
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
        <h3>My Journal</h3>
        <div>
          {posts && posts.map((value, index)=> {
            return ( 
              <Card key={index}>
                {/* <CardImg /> we'll come back to this */} 
                <CardBody>
                  <CardTitle>{value.title}</CardTitle>
                  <CardSubtitle>{value.mood}</CardSubtitle>
                  <CardText>{value.body}</CardText>
                </CardBody>
                <Button>
                  View Entry
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