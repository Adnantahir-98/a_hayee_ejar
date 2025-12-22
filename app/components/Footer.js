'use client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from '../context/TranslationContext';
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";


const Footer = () => {
  const { translate, direction } = useTranslation();
  return (
    <div className='bg-warning' style={{ color: '#161616ff' }}>
      <Container>
        <Row className='py-5 h3' >
          <Col md={4} >
            <u>Contacts</u> <br /><br />
            <div className="d-flex gap-4">
              <FaEnvelope size={28} /> email@ejar.com
            </div>
            <div className="d-flex gap-4 mt-4">
              <FaPhoneAlt size={28} /> +965 55***889
            </div>
            <div className="d-flex gap-4 mt-4">
              <FaWhatsapp size={28} /> +965 55***889
            </div>
            
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <u>Socials Media</u> <br />

            <div className="d-flex gap-4 mt-3">
              <FaTiktok size={28} />
              <FaFacebookF size={28} />
              <FaInstagram size={28} />
            </div>
          </Col>
          <p className='text-center mt-4'>&copy; 2025 {translate('ejar')}, {translate('allrights')}. </p>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
