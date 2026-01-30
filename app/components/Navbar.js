
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
      variant="dark" // <--- This tells Bootstrap to use white text/icons
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          {direction === 'rtl' ?
            <img
              src="/arabic-logo.png"
              alt="Main Logo"
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            :
            <img
              src="/white-logo.png"
              alt="Main Logo"
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          }
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center m-auto">
            <Nav.Link href="/">{translate('home')}</Nav.Link>
            <Nav.Link href="#about">{translate('about')}</Nav.Link>
            <Nav.Link href="#services">{translate('services')}</Nav.Link>
            <Nav.Link href="#contact">{translate('contact')}</Nav.Link>
            <LanguageSwitcher/>
          </Nav>
        </Navbar.Collapse> */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* Add flex-column for mobile, flex-lg-row for desktop */}
          <Nav className="align-items-center m-auto d-flex flex-column flex-lg-row">

            {/* Use order-2 on mobile so links move down, order-lg-1 for desktop */}
            <Nav.Link href="/" className="order-2 order-lg-1">{translate('home')}</Nav.Link>
            <Nav.Link href="#about" className="order-2 order-lg-1">{translate('about')}</Nav.Link>
            <Nav.Link href="#services" className="order-2 order-lg-1">{translate('services')}</Nav.Link>
            <Nav.Link href="#contact" className="order-2 order-lg-1">{translate('contact')}</Nav.Link>

            {/* Use order-1 on mobile to jump to the top, order-lg-2 for desktop */}
            <div className="order-1 order-lg-2">
              <LanguageSwitcher />
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
