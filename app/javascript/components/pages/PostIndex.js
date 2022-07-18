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


  filterChoice(e){
    if (e.target.value !== "Date"){
      let filteredPost = this.state.posts.filter(post => {
        return post.mood == e.target.value
      })
    }
    this.setState({filterChoice: e.target.value})
  }


// filterChoice(e){
//   this.setState({
//     posts: this.state.post.filter(function(choice) {
//       return choice == e.target.value
//     })
//   })
// }

  
  render() {
    const {posts} = this.props

    return (
      <>
        <h3>My Journal's</h3>
        <select onChange={this.filterChoice}>
          <option value="Happy">Happy</option>
          <option value="Good">Good</option>
          <option value="Okay">Okay</option>
          <option value="Sad">Sad</option>
          <option value="Miserable">Miserable</option>
          <option value="Date">Date Time</option>
        </select>
        <div value={this.state.filterChoice}>
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