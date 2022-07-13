import React from "react"
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

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
          <Route path="/postedit" component={postEdit} />
          <Route component={NotFound}/>
        </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App
