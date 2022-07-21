import React, { Component } from 'react'
import {
    Card, 
    CardText,
    CardTitle, 
    CardSubtitle, 
    Button
  } from 'reactstrap';

export default class Services extends Component {
    render() {
        return (
            <div className='services-container'>
                <h1>Services</h1>
                <Card id='services-c'>
                    <CardTitle id='sc-title'>The Tribe</CardTitle>
                    <CardText>
                        At TherapyTribe,they believe that individuals become
                        empowered to help themselves and others when they feel a
                        part of something larger. Their free online support
                        community offers members a convenient and safe place to
                        connect. They’ve combined members from five
                        long-standing support websites to create one fantastic
                        wellness community.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://support.therapytribe.com/</CardSubtitle>
                    <a href='https://support.therapytribe.com/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'> 
                    <CardTitle id='sc-title'>Nami (National alliance in mental health)</CardTitle>
                    <CardText>
                        NAMI, the National Alliance on Mental Illness, is the
                        nation’s largest grassroots mental health organization
                        dedicated to building better lives for the millions of
                        Americans affected by mental illness.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://www.nami.org/Home</CardSubtitle>
                    <a href='https://www.nami.org/Home' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'>
                    <CardTitle id='sc-title'>Better Help</CardTitle>
                    <CardText>
                        Makes professional therapy accessible, affordable, and
                        convenient — so anyone who struggles with life’s
                        challenges can get help, anytime and anywhere.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://www.betterhelp.com/</CardSubtitle>
                    <a href='https://www.betterhelp.com/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'>
 
                    <CardTitle id='sc-title'>PostpartumProgress</CardTitle>
                    <CardText>
                        Postpartum is the world’s most widely-read blog
                        dedicated to maternal mental illness.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://postpartumprogress.com/about</CardSubtitle>
                    <a href='https://postpartumprogress.com/about' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'>
 
                    <CardTitle id='sc-title'>DBSA(Depression and Bipolar Support Alliance)</CardTitle>
                    <CardText>
                        DBSA provides hope, help, support, and education to
                        improve the lives of people who have mood disorders.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://www.dbsalliance.org/education/</CardSubtitle>
                     <a href='https://www.dbsalliance.org/education/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'>
 
                    <CardTitle id='sc-title'>988Suicide&crisisLifeline</CardTitle>
                    <CardText>
                        The Lifeline provides 24/7, free and confidential
                        support for people in distress, prevention and crisis
                        resources for you or your loved ones, and best practices
                        for professionals in the United States.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://988lifeline.org/</CardSubtitle>
                    <a href='https://988lifeline.org/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='services-c'>
 
                    <CardTitle id='sc-title'>Healthunlocked</CardTitle>
                    <CardText>
                        Imagine a world where you can tap into the health
                        experiences of millions of people – and translate these
                        into an action plan with the support of peers and
                        patient organisations.
                    </CardText>
                    <CardSubtitle id='sc-subtitle'>https://healthunlocked.com/</CardSubtitle>
                    <a href='https://healthunlocked.com/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
                <Card id='last-card'>
                    <CardTitle id='sc-title'>Zencare</CardTitle>
                    <CardText>
                        Zencare started as a solution to a common problem: it's
                        difficult to find a great-fitting therapist through an
                        online search.Founder Yuri Tomikawa began Zencare after
                        spending weeks looking for the right therapist. Our goal is
                        to remove the guesswork and logistical hassle from the
                        therapist search, providing a smooth and empowering
                        experience.
                    </CardText>
                    <CardSubtitle>https://zencare.co/</CardSubtitle>
                    <a href='https://zencare.co/' target='_blank'>
                        <Button id='button-serv'>Learn More</Button>
                    </a>
                </Card>
            </div>
        )
    }
}
