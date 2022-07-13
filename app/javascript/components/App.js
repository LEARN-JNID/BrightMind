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
  render () {
    return (
    <Router>
      <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/postindex" component={PostIndex} />
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
