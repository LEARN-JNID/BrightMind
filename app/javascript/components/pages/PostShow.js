import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export default class PostShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
        deleted: false
    }
  }

  handleDelete = () => {
        this.props.deletePost(this.props.post.id)
        this.setState({deleted: true})
    }

  render() {
    if(this.state.deleted) {
      return(<Redirect to="/postindex" />)
    }
    console.log("THIS IS PROPS: ", this.props)
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
      <button onClick={this.handleDelete}>
          Delete Entry
      </button>
      </div>
    }
      </>
    )
  }
}
