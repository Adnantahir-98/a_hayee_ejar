
'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '../context/TranslationContext';

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { translate, direction } = useTranslation();
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <img
            src="/logo-white.png"
            alt="Main Logo"
            width={120}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center m-auto">
            <Nav.Link href="/">{translate('home')}</Nav.Link>
            <Nav.Link href="#about">{translate('about')}</Nav.Link>
            <Nav.Link href="#services">{translate('services')}</Nav.Link>
            <Nav.Link href="#contact">{translate('contact')}</Nav.Link>
            <LanguageSwitcher/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
