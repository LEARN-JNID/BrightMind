import React, { Component } from 'react';
import Chart from '../components/Chart'

class MyAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            moods: {
                good: 0,
                sad: 0,
                okay: 0,
                miserable: 0,
                happy: 0
            }
        }
      }

      componentDidMount = () => {
        this.generateChartInfo()
      }

      generateChartInfo = () => {
        let {moods} = this.state
        this.props.posts.forEach(post => {
            let currentPostMood = post.mood.toLowerCase()
            moods[currentPostMood] = moods[currentPostMood] + 1
        })
        
        this.setState({moods: moods})
      }

    render() {
        console.log("THIS IS MOODS", this.state.moods)
        return (
            <div>
                <h3>My Account</h3>
                <div id="posts">
                    <ul>
                        {this.props.posts && 
                        this.props.posts.map((currentPost, index) => {
                            return(
                                <li key={index}>
                                    currentPost
                                </li>
                                )
                        }) 
                        }
                    </ul>
                </div>
                <div id="quotes">
                    <h4>Quote of the Day</h4>
                    <p>Don't be a baby about it, be about it baby</p>
                </div>
                <Chart moods={this.state.moods}/>
            </div>
        );
    }
}

export default MyAccount;