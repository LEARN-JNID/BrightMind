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
            },
            quotes: [],
            currentQuote: {},
            loading: true
        }
      }

      componentDidMount = () => {
        this.generateChartInfo()
        this.getQuotes()
      }

      generateChartInfo = () => {
        let {moods} = this.state
        this.props.posts.forEach(post => {
            let currentPostMood = post.mood.toLowerCase()
            moods[currentPostMood] = moods[currentPostMood] + 1
        })
        this.setState({moods: moods})
      }

      getQuotes = () => {
        fetch('https://type.fit/api/quotes')
          .then(res => res.json())
          .then(payload =>{ 
            let happyQuotes = payload.filter(quote => {
                return quote.text.includes('happy') || quote.text.includes('happiness')
            })
            this.setState({ quotes: happyQuotes, loading: false })})
          .catch(errors => console.log(errors))

      }

      randomQuote = () => {
        let randomNum = Math.floor(Math.random() * (this.state.quotes.length - 1)) + 1;
        let quote = this.state.quotes[randomNum]
        this.setState({currentQuote: quote})
      }
      

    render() {
        return (
            <div>
                <h3>My Account</h3>
                <div id='posts'>
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
                    <h2>Quote</h2>
                    {this.state.loading && 
                        <p>Loading...</p>
                    }
                    {!this.state.loading &&
                    <div>
                        <p>{this.state.currentQuote.text}</p>
                        <h4>{this.state.currentQuote.author}</h4>
                        <button onClick={this.randomQuote}>Generate Quote</button>
                    </div>
                    }
                    
                </div>
                <Chart moods={this.state.moods}/>
            </div>
        );
    }
}

export default MyAccount;