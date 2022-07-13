import React from "react"
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import PostIndex from './pages/PostIndex'
import PostNew from './pages/PostNew'
import PostShow from './pages/PostShow'
import PostEdit from './pages/PostEdit'
import Footer from './components/Footer'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.readPost()
  }
  readPost = () => {
    fetch('/posts')
      .then(res => res.json())
      .then(payload => this.setState({ posts: payload }))
      .catch(errors => console.log(errors))
  }

  render () {
    const {current_user} = this.props
    return (
    <Router>
      <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/postindex" render={() => {
              let myPost = this.state.posts.filter(post => post.user_id === current_user.id)
              return < PostIndex posts = { myPost } />
            }} />
          <Route path="/postnew" component={PostNew} />
          <Route path="/postshow/:id" component={PostShow} />
          <Route path="/postedit" component={PostEdit} />
        </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App
