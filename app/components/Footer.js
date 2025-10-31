import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-warning'>
      <Container>
        <Row className='py-5' >
          <Col md={3}>
            Contact Details
          </Col>
          <Col md={3}>
            Socials <br />
            Socials <br />
            Socials <br />
            Socials<br />
          </Col>
          <Col md={3}>
            Quick Links <br />
            Quick Links <br />
            Quick Links <br />
            Quick Links<br />
          </Col>
          <Col md={3}>
            Menu <br />
            Menu <br />
            Menu <br />
            Menu <br />
          </Col>
          <p className='text-center mt-4'>&copy; 2025 Ejar, Allrights reserved. </p>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
