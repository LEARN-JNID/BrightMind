import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'
import {
  Card, 
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
      <div className='index-page'>
        <h3 id='posts-h3'>My Journal's</h3>
        <div className='index-container'>
          {posts &&
           posts.map((currentPost, index)=> {
            return ( 
              <NavLink 
              to={`/postshow/${currentPost.id}`}
              id='index-cards'>
                <Card 
                style={{ width: '20rem', height: '15rem'}} 
                key={index}>
                  <CardBody>
                    <CardTitle id='post-title'>{currentPost.title}</CardTitle>
                    <div id='mood-div-c'>
                      <CardSubtitle 
                      id='post-mood'>
                        {currentPost.mood}</CardSubtitle>
                      <GoPrimitiveDot  style={{color: currentPost.color}}  id='post-icon'/>
                    </div>
                    <CardText id='post-text'>{`${currentPost.body.slice(0,150)} ...`}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
              )
            })
          }
        </div>
      </div>
      </>
    )
  }
}