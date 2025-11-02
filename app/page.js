"use client"

import { useState, useEffect } from 'react';

import { Container, Row, Col, Button, } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { BsBriefcase, BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { LuWarehouse } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";
import { GoStack } from "react-icons/go";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';

import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const products = [
  { image: '/icons/apartments-black.svg', label: 'Apartment' },
  { image: '/icons/villa.svg', label: 'Full Floors' },
  { image: '/icons/artboard-6.svg', label: 'Offices' },
  { image: '/icons/villa.svg', label: 'Villas' },
  { image: '/icons/stores.svg', label: 'Stores' },
  { image: '/icons/storage.svg', label: 'Storage' },
];


const Page = () => {

  const [show, setShow] = useState(false);
  const [advanceshow, setAdvanceShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Advance button Pop-Up Modal
  const handleAdvanceClose = () => setAdvanceShow(false);
  const handleAdvanceShow = () => setAdvanceShow(true);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <section className='hero-homg-bg-img mb-0 pb-0' style={{ position: 'relative' }}>
        <Container>
          <Row className='pt-20' style={{ marginBottom: 40 }}>
            <Col md={8}>
              <h1 className='font-bold wellcome-section' style={{ color: 'white' }} >
                Welcome to <br />
                <strong className='display-1 font-normal ejar-fontstyle'>Ejar</strong> <br />
                <span className='font-normal'>Your rent is a click away</span>
              </h1>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-center text-center promote-section"

            >
              <h4
                className=" font-normal text-white promote-font"
              >
                Promote your <br className='d-none d-lg-block' /> estate <br />
                <Button
                  variant="success"
                  className="px-5 font-bold mt-3"
                  style={{ fontSize: 25 }}
                  onClick={handleShow}
                >
                  Here
                </Button>
              </h4>
            </Col>
          </Row>
          <span className='d-none d-lg-flex'>
            <Row className='rounded-lg mt-auto '
              style={{
                background: 'rgb(255 255 255 / 34%);',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255,255,255,0.25)',
                width: '80%',
              }}>
              <Fade direction="left">
                <Row className='rounded px-5 py-4 text-dark w-60 text-center m-auto mt-5' style={{ background: 'rgba(255,255,255, 0.85)' }}>
                  <Col md={3} className='m-auto'>
                    <Fade direction="right" fraction={0.5} cascade delay={80}>
                      <Dropdown>
                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark ">
                          Areas
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Fade>
                  </Col>
                  <Col md={4} className='m-auto'>
                    <Fade direction="right" fraction={0.5} cascade delay={130}>
                      <Dropdown>
                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark ">
                          Select Property Type
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Fade>
                  </Col>
                  <Col md={3} className='text-end m-auto'>
                    <Fade direction="right" fraction={0.5} cascade delay={140}>
                      <Button variant="success">
                        Search
                      </Button>
                    </Fade>
                  </Col>
                  <Col md={2} className='text-end m-auto'>
                    <Fade direction="right" fraction={0.5} cascade delay={150}>
                      <Button variant="danger" className='px-3 btn btn-link text-danger' onClick={handleAdvanceShow}>Advance</Button>
                    </Fade>
                  </Col>
                </Row>
              </Fade>

              <Slide direction="down" fraction={0.5} cascade delay={130}>
                <div className="property-type-scroll m-auto py-4">
                  {[
                    { img: "/icons/apartments.svg", text: "Apartments" },
                    { img: "/icons/apartments-black.svg", text: "Whole Floor" },
                    { img: "/icons/villa.svg", text: "Vilas" },
                    { img: "/icons/artboard-6.svg", text: "Offices" },
                    { img: "/icons/stores.svg", text: "Stores" },
                    { img: "/icons/storage.svg", text: "Storages" },
                  ].map(({ img, text }, i) => (
                    <div className="property-item" key={i}>
                      <Button
                        variant="secondary"
                        style={{ fontWeight: "700" }}
                        className="d-flex align-items-center gap-2 w-100"
                      >
                        <img src={img} style={{ width: "40px" }} alt={text} />
                        <span>{text}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </Slide>

            </Row>
          </span>

        </Container>
      </section>


      <section className="browse-rentsec position-relative">
        <div className="overlay">
          <Container>
            <Row className="align-items-stretch">
              <Col md={12} lg={6} className="my-5 py-5">
                <Row className="align-items-stretch mobileViewOff">
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/apartments-black.svg" alt="browser-apartment for rent broswer-img" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Apartments</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/villa.svg" alt="browser-apartment for rent" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Full Floors</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/artboard-6.svg" alt="browser-apartment for rent" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Offices</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/villa.svg" alt="browser-apartment for rent" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Villas</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/storage.svg" alt="browser-apartment for rent" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Stores</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/storage.svg" alt="browser-apartment for rent" className='broswer-img' />
                      <h2 className="text-dark mt-0 pt-0">Storages</h2>
                      <Button variant="success" className="px-5 font-bold my-4 myButton">
                        Explore
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Row className="align-items-stretch mobileSlider mx-auto">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {products.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Col sm={12} md={12}>
                        <div className="brdrd-imges text-center my-3">
                          <img src={item.image} alt="browser-apartment for rent broswer-img" className='broswer-img' />
                          <h2 className="text-dark mt-0 pt-0">{item.label}</h2>
                          <Button variant="success" className="px-5 font-bold my-4 myButton">
                            Explore
                          </Button>
                        </div>
                      </Col>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Row>

              <Col
                md={6}
                className="d-flex d-none d-lg-flex flex-column text-black justify-content-between align-items-center text-center browse-text-col my-5 py-5 px-5"
                style={{ paddingTop: '180px !important', paddingBottom: '180px !important' }}
              >
                <h1 className="display-1 fw-bolder">Browse.</h1>
                <h1 className="display-1 fw-bolder">Rent.</h1>
                <h1 className="display-1 fw-bolder">Settle In!</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <hr className="hr-line-browse" style={{ border: '1px solid black' }} />
      </section>



      <section style={{ backgroundColor: '#383838ff', paddingBottom: 30 }}>
        <Container>
          <h1 className='display-1 fw-bolder pt-5 font-bold text-white'>Here&apos;s what&apos;s new</h1>
          <h3 className='text-white' style={{ fontFamily: 'arial' }}>more here &gt; </h3>

          <Row className='what-new-bg m-auto rounded-lg my-5 pb-4' style={{ position: 'relative' }}>
            <Col md={4} className='border border-warning text-center section-border'>
              <img src="/logo.svg" className="m-auto mt-4" style={{ width: '90px', height: '40px' }} />
              <h1 className='display-5 fw-bolder text-white section-title' >
                Sabah Al Salim
              </h1>
              <h3 className='text-white'>
                Apartment - 3 bedroom <br />
                with a balcony
              </h3>
            </Col>
            <Col md={4} className='learn-more-button' >
              <Button
                variant="success"
                className="text-white mb-3"
                style={{
                  fontSize: '22px',
                  borderRadius: '18px',
                  width: '60%',
                  fontWeight: '700',
                  fontFamily: 'arial'
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className='what-new-bg-2 m-auto rounded-lg pb-4' style={{ position: 'relative' }}>
            <Col md={4} className='border border-warning text-center section-border' >

              <h2 className='display-5 fw-bolder text-white' style={{ marginTop: '15%', marginBottom: '15%' }}>
                Rent a Vila
              </h2>
              <h3 className='text-white'>
                In Abdullah Al Salim
              </h3>
            </Col>
            <Col md={4} className='learn-more-button'>
              <Button
                variant="success"
                className="text-white font-bold mb-3"
                style={{
                  fontSize: '22px',
                  borderRadius: '18px',
                  width: '60%',
                  fontWeight: '700',
                  fontFamily: 'arial'
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>


          <Row className='promote-section-bg m-auto rounded-lg text-center mt-5'>
            <h1 className='display-1 fw-bolder text-white font-bold' style={{ marginTop: '15%', paddingBottom: 100 }}>
              <span className='Promote'>Promote</span> <br />
              <span className='Promote-Subtitle'>Your estate today!</span>
            </h1>
            <Button variant="warning" className='mt-4 m-auto fw-bold font-bold mb-5 Promote-button' onClick={handleShow}>Promote Here</Button>
          </Row>
        </Container>
      </section>


      <Modal show={show} onHide={handleClose} style={{ marginTop: '10%' }} dialogClassName="Promote-modal">
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body className='py-5'>
          <Row className="g-3">
            <Col md={6} className='text-center'>
              <div className='bg-dark text-white rounded-lg py-5'>
                <BsFillPersonPlusFill className='text-warning display-2 m-auto' />
                <h3 className='text-center fw-bold mb-4'>Multi-ad</h3>
                <h5 className='text-center fw-bold mb-4'>The multi-ad package offers:</h5>
                <ul className='text-left mb-4' style={{ listStyleType: 'disc' }}>
                  <li>Monthly ads</li>
                  <li>Professional property photos</li>
                  <li>90-second property videos</li>
                  <li>Architectural floor plans</li>
                  <li>30-day ad listings</li>
                  <li>Customized packages</li>
                </ul>
                <Button variant="warning" className='mt-4 fw-bold px-5'>Select</Button>
              </div>
            </Col>

            <Col md={6} className='text-center'>
              <div className='bg-dark text-white rounded-lg mx-2 py-5'>
                <BsPersonFill className='text-warning display-2 m-auto' />
                <h3 className='text-center fw-bold mb-4'>Individual</h3>
                <h5 className='fw-bold text-center mb-4'>Advertising for individuals includes:</h5>
                <ul className='text-left mb-5' style={{ listStyleType: 'disc' }}>
                  <li>Professional photography</li>
                  <li>90-second video</li>
                  <li>Special Dedicated advertiser dashboard</li>
                  <li>30-day ad listing</li>
                  <li>Competitive ad value</li>
                </ul>
                <Button variant="warning" className='mt-4 fw-bold px-5'>Select</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>


      {/* Advance Button Modal  */}
      <Modal show={advanceshow} onHide={handleAdvanceClose} dialogClassName="custom-modal">
        <Modal.Header className='fw-bolder' closeButton>
          Advanced Search
        </Modal.Header>

        <Modal.Body className='p-4'>
          <h3>Property Type</h3>
          <Row>
            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <MdOutlineVilla className='display-5 m-auto pb-2' />
                <p>Villa</p>
              </div>
            </Col>
            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <BsBuilding className='display-5 m-auto pb-2' />
                <p>Appartment</p>
              </div>
            </Col>
            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <GoStack className='display-5 m-auto pb-2' />
                <p>Whole Floor</p>
              </div>
            </Col>

            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <FaStore className='display-5 m-auto pb-2' />
                <p>Store</p>
              </div>
            </Col>
            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <LuWarehouse className='display-5 m-auto pb-2' />
                <p>Storage</p>
              </div>
            </Col>
            <Col md={4} className='text-center mb-3'>
              <div className='pt-2 pb-1 rounded-lg text-center' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <FiBriefcase className='display-5 m-auto pb-2' />
                <p>Office</p>
              </div>
            </Col>
          </Row>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="w-100 d-flex justify-content-between align-items-center mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
              Select Area
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='mb-3'>
            <Dropdown.Toggle id="dropdown-basic" className="w-100 d-flex justify-content-between align-items-center" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
              Select Block
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <Form className='text-white'>
            <Row className="mb-3">
              <small id="emailHelp" className="form-text text-secondary pb-1">Budget range (KWD per month)</small>
              <Col>
                <Form.Control type="text" size="sm" placeholder="250" className='place-clr' />
              </Col> To
              <Col>
                <Form.Control type="text" size="sm" placeholder="260" className='place-clr' />
              </Col>
            </Row>
          </Form>

          <Row>
            <h5>Condition</h5>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Bechelors</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Families</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Females</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Males</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Office</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Storage</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Workshop</small>
              </div>
            </Col>
            <Col md={3}>
              <div className='rounded-lg p-2 text-center mb-3' style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <small>Clinic</small>
              </div>
            </Col>
          </Row>

          <h5>Additional Filters</h5>
          <Dropdown className='mb-2'>
            <small className='text-secondary'>Number of Floors</small>
            <Dropdown.Toggle id="dropdown-basic" className="w-100 d-flex justify-content-between align-items-center" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
              Select Floors
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form className='text-white'>
            <small id="radio" className="form-text text-secondary pb-1">Basement</small>
            <Form.Check type="radio" label="Yes" name="1" aria-label="radio 1" />
            <Form.Check type="radio" label="No" name="1" aria-label="radio 2" />
          </Form>

          <div className='text-center'>
            <Button variant="warning" className='mt-4 fw-bold px-5'>Search</Button>
          </div>
        </Modal.Body>
      </Modal>

      <Box sx={{ '& > :not(style)': { m: 1 } }} className={`${scrolled ? '' : 'searchbtn'}`} onClick={handleShowSearch}>
        <Fab size="medium" className='bg-warning' aria-label="add" style={{ position: 'fixed', top: '12%', left: '5%', padding: '30px' }}>
          <SearchIcon className='display-1 text-white' />
        </Fab>
      </Box>

      <Modal show={showSearch} onHide={handleCloseSearch} dialogClassName="Searchmodal" contentClassName="bg-grey-modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Fade direction="left">
            <Row className='rounded px-5 pb-4 text-dark w-100 text-center m-auto mt-3' >
              <Col md={3} className='m-auto'>
                <Fade direction="right" fraction={0.5} cascade delay={80}>
                  <Dropdown>
                    <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark w-100">
                      Areas
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="#/action-1">Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Fade>
              </Col>
              <Col md={5} className='m-auto'>
                <Fade direction="right" fraction={0.5} cascade delay={130}>
                  <Dropdown>
                    <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 w-100 px-4 py-2 bg-light text-dark ">
                      Select Property Type
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="#/action-1">Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Fade>
              </Col>
              <Col md={2} className='text-end m-auto'>
                <Fade direction="right" fraction={0.5} cascade delay={140}>
                  <Button variant="success">
                    Search
                  </Button>
                </Fade>
              </Col>
              <Col md={2} className='text-end m-auto'>
                <Fade direction="right" fraction={0.5} cascade delay={150}>
                  <Button variant="danger" className='px-3 btn btn-link text-danger' onClick={handleAdvanceShow}>Advance</Button>
                </Fade>
              </Col>
            </Row>
          </Fade>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Page;
