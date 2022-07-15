import React from "react"
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import PostIndex from './pages/PostIndex'
import PostNew from './pages/PostNew'
import PostShow from './pages/PostShow'
import PostEdit from './pages/PostEdit'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    this.readPost()
  }

  readPost = () => {
    fetch('/posts')
      .then(res => res.json())
      .then(payload => this.setState({ posts: payload, loading: false }))
      .catch(errors => console.log(errors))
  }

  deletePost = (id) => {
    fetch(`/posts/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readPost())
    .catch(errors => console.log("delete errors:", errors))
  }

  createPost = (newPost) => {
    fetch(`/posts`, {
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readPost())
    .catch(errors => console.log("Post create errors:", errors))
  }

  editPost = (post, id) => {
    fetch(`/posts/${id}`, {
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readPost())
    .catch(errors => console.log("Post create errors:", errors))
  }

  render () {
    console.log(this.state.posts)
    const {current_user} = this.props
    return (
    <Router>
      <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="/myaccount" render={() => {
              let myPost = this.state.posts.filter(post => post.user_id === current_user.id)
              return < MyAccount posts={ myPost } />
            }} />
          <Route path="/postindex" render={() => {
              let myPost = this.state.posts.filter(post => post.user_id === current_user.id)
              return < PostIndex posts={ myPost } />
            }} />
          <Route path="/postnew" render={() => <PostNew createPost={this.createPost} />} />
          <Route path="/postshow/:id"
            render={(props) => {
            let id = props.match.params.id
            let post = this.state.posts.find(postObject => postObject.id == id)
            if(!this.state.loading){
              return <PostShow deletePost={this.deletePost} logged_in={this.props.logged_in} post={post} user_id={this.props.current_user.id}/>
            } else {
             { return (<div>Waiting</div>)}
            }
            }}
             />
          <Route path="/postedit/:id"
            render={(props) => {
              let id = props.match.params.id
              let post = this.state.posts.find(postObject => postObject.id == id)
              return <PostEdit editPost={this.editPost} logged_in={this.props.logged_in} post={post} user_id={this.props.current_user.id}/>
              }}
               />
        </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App
