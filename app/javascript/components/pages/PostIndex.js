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
// import Filter from '../components/Filter';

export default class PostIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: this.props.posts
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.posts !== prevProps.posts){
      this.setState({posts: this.props.posts})
    }
  }

  filterChoice = (e) => {
    if(e.target.value == "All") {
      this.setState({posts: this.props.posts})
    } else if(e.target.value !== "Date" || e.target.value !== "All"){
      let filteredPosts = this.props.posts.filter(post => {
        return post.mood === e.target.value
      })
      this.setState({posts: filteredPosts})
    } else {
      // Dates
      // iterate
      // look at dates
      // convert dates
      // compare dates
    }
  }

  
  render() {
    const {posts} = this.state
    console.log("THIS IS POSTS STATE", this.state.posts)
    return (
      <>
        <h3>My Journal's</h3>
        <select onChange={this.filterChoice}>
          <option value="All">All</option>
          <option value="Happy">Happy</option>
          <option value="Good">Good</option>
          <option value="Okay">Okay</option>
          <option value="Sad">Sad</option>
          <option value="Miserable">Miserable</option>
          <option value="Date">Date Time</option>
        </select>
        <div>
          {posts &&
           posts.map((currentPost, index)=> {
            return ( 
              <NavLink 
              key={index}
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
                      <GoPrimitiveDot id='post-icon'/>
                    </div>
                    <CardText id='post-text'>{`${currentPost.body.slice(0,150)} ...`}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
              )
            })
          }
        </div>
      </>
    )
  }
}