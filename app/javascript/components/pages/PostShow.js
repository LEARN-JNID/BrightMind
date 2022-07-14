import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class PostShow extends Component {
  render() {
    return (
      <>
    {this.props.logged_in &&
    <div className='show_post'> 
      <h3>PostShow</h3>
      <h1>{this.props.post.title}</h1>
      <h6>{this.props.post.created_at}</h6>
      <h6>{this.props.post.mood}</h6>
      <p>{this.props.post.body}</p>
      <NavLink to={`/postedit/${this.props.post.id}`}>
          Edit Entry
      </NavLink>
      <NavLink to={`/`}>
          Delete Entry
      </NavLink>
      </div>
    }
      </>
    )
  }
}
