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
          <Route path="/postshow/:id" component={PostShow}
            render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartmentObject => apartmentObject.id == id)
            return <ApartmentShow deleteApartment={this.deleteApartment} apartment={apartment} user_id={this.props.current_user.id}/>
            }}
            return  />
          <Route path="/postedit" component={PostEdit} />
        </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App
