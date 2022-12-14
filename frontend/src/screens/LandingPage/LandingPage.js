import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className='main'>
    <Container>
        <Row>
           <div className='intro-text'>
            <div>
                <h1 className='title'>Welcome to meeting</h1>
                <p className='subtitle'>We can Easily to book the meeting</p>
            </div>
            <div className='buttoncontainer'>
                <a href='/login'>
                    <Button size='lg' className='landingbutton'>
                        Login
                    </Button>
                </a>

                <a href='/signup'>
                    <Button  size='lg' className='landingbutton' variant="outline-primary">
                    Signup
                    </Button>
                </a>
            </div>
           </div>
        </Row>
    </Container>
    </div>
  )
}

export default LandingPage