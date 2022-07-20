import React, { Component } from 'react';
import Chart from '../components/Chart'
import {NavLink} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardTitle,
    Button,
    CardFooter
  } from 'reactstrap';

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
            loading: true,
            isHidden: true
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
        this.setState({currentQuote: quote, isHidden: false})
      }
      

    render() {
        console.log('display', this.state.isHidden)
        return (
            <div className='account-container'>
                <h3>My Account</h3>
                <div id='account-group-1'>
                    <Card style={{ width: '30rem', height: '25rem'}}
                     className='project-card'>
                    <NavLink to="/postindex">
                        <CardTitle className='project-card-content'>View Your Journal <AiOutlineArrowRight/></ CardTitle> 
                    </NavLink>
                    </Card>
                    <Card 
                    id="quotes"
                    style={{ width: '30rem', height: '25rem'}} >
                        <CardHeader><h2>Quote</h2></CardHeader>
                        {this.state.loading && 
                            <p>Loading...</p>
                        }
                        {!this.state.loading &&
                        <div>
                            <CardBody id='cq-body'>
                               <CardText id='cq-text' 
                               className={this.state.isHidden ? 'cq-text': 'cq-text-display'}> 
                                    {`"${this.state.currentQuote.text}"`}
                                    <h4>{`-${this.state.currentQuote.author}`}</h4>
                                </CardText>
                            </CardBody>
                            <CardFooter id='cq-footer'>
                                <Button id='button-q' onClick={this.randomQuote}>Generate Quote</Button>
                            </CardFooter>
                        </div>
                        }
                    </Card>
                    </div>
                    <Card 
                    id='chart-card'
                    style={{ width: '78%', height: '78%'}}>
                        <Chart moods={this.state.moods}/>
                    </Card>
                </div>
        );
    }
}

export default MyAccount;