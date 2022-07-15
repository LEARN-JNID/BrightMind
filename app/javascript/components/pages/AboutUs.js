import React, { Component } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {
  Card, 
  CardImg,
  CardText, 
  CardSubtitle, 
  CardBody,
  CardTitle
} from 'reactstrap';

export default class AboutUs extends Component {
  render() {
    return (
      <div className='cards-container'>
        <Card id='ab-cards'
        style={{ width: '30rem' }}>
          <CardImg id='ab-card-img' src={'https://media-exp1.licdn.com/dms/image/C5603AQGRNYITByS-XQ/profile-displayphoto-shrink_800_800/0/1656088665648?e=1663200000&v=beta&t=CRLkqXw1FqCPTTwvOchErmb8bhmiSVamvHS6bLvRg1U'}/>
          <CardBody>
            <CardTitle className='ab-card-t'>Nic Last</CardTitle>
            <CardSubtitle className='ab-card-s'>Design Lead</CardSubtitle>
            <CardText>I am a Junior Full Stack Developer currently honing my skills in Ruby and React at LEARN Academy. Right out of highschool I jumped into the tech industry by self teaching myself HTML, CSS, and JS. I am driven by my love for building things from scratch and learning new subjects. I have great communication skills from working in the restaurant industry for 2 years and am quick to pick up new things. I am a team worker and a hard worker, doing every task to the best of my ability.
              <a id='ab-icons' 
              href='https://github.com/niclast7611'
              target='_blank'><AiFillGithub /></a>
              <a id='ab-icons'
              href='https://www.linkedin.com/in/nicolas-last-095099239/'
              target='_blank'><AiFillLinkedin /></a>
            </CardText>
          </CardBody>
        </Card>

        <Card id='ab-cards' 
        style={{ width: '30rem' }}>
          <CardImg id='ab-card-img' src={'https://media-exp1.licdn.com/dms/image/C5603AQHAoB930aRElw/profile-displayphoto-shrink_200_200/0/1655934427119?e=1663200000&v=beta&t=oB3ojrZp0YlASiD4Wfpueh_KJcb_Wdb1XBamy3Fp9zk'} />
          <CardBody>
            <CardTitle className='ab-card-t'>Ivan Ortega</CardTitle>
            <CardSubtitle className='ab-card-s'>Tech Lead</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus id. Diam volutpat commodo sed egestas egestas fringilla. Morbi non arcu risus quis varius quam.
            <a id='ab-icons'
            href='https://github.com/iiAnti'
            target='_blank'><AiFillGithub /></a>
              <a id='ab-icons'
              href='https://www.linkedin.com/in/ivanocreates/'
              target='_blank'><AiFillLinkedin /></a>
            </CardText>
          </CardBody>
        </Card>

        <Card id='ab-cards'
        style={{ width: '30rem' }}>
          <CardImg id='ab-card-img' src={'https://avatars.githubusercontent.com/u/61197981?v=4'}/>
          <CardBody>
            <CardTitle className='ab-card-t'>Jenner Dulce</CardTitle>
            <CardSubtitle className='ab-card-s'>Product Manager</CardSubtitle>
            <CardText>Fullstack JavaScript Developer and U.S. Navy Veteran with a background of adaptability in various industries. Transitioning from healthcare to the tech industry, I am looking to prove my worth as a software developer by combining previous experiences with new programming knowledge to develop applications that focus on efficiency, scalability, and creativity.
               <a id='ab-icons'
               href='https://github.com/jennerdulce'
               target='_blank'><AiFillGithub /></a>
              <a id='ab-icons'
              href='https://www.linkedin.com/in/jennerdulce/'
              target='_blank'><AiFillLinkedin /></a>
            </CardText>
          </CardBody>
        </Card>

        <Card id='ab-cards'
        style={{ width: '30rem' }}>
          <CardImg id='ab-card-img' src={'https://media-exp1.licdn.com/dms/image/C4E03AQEsKyslkiOjtw/profile-displayphoto-shrink_800_800/0/1656088885702?e=1663200000&v=beta&t=lPa9nSu-K5wi7XPdW4TL7XEzGDkNpQulbr_adKAGylw'}/>
          <CardBody>
            <CardTitle className='ab-card-t'>Davon Kennedy</CardTitle>
            <CardSubtitle className='ab-card-s'>Project Manager</CardSubtitle>
            <CardText>My name is Davon Kennedy. I'm from Detroit MI, I'm a student at Learn Academy and i'm excited to hop into the tech industry and gain more experience as I go. I possess many skills as a developer such as critical thinking, problem solving, active listening, flexibility and optimism.My name is Davon Kennedy. I'm from Detroit MI, I'm a student at Learn Academy and i'm excited to hop into the tech industry and gain more experience as I go. I possess many skills as a developer such as critical thinking, problem solving, active listening, flexibility and optimism.
            <a id='ab-icons'
            href='https://github.com/DavonKenn'
            target='_blank'><AiFillGithub /></a>
              <a id='ab-icons'
              href='https://www.linkedin.com/in/davon-kennedy-893b1b242/'
              target='_blank'><AiFillLinkedin /></a>
            </CardText>
          </CardBody>
        </Card>
        
    
      </div>
    )
  }
}
