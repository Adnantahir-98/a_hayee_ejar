"use client"

import { useState } from 'react';

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

import { Fade, Slide } from "react-awesome-reveal";


const Page = () => {

  const [show, setShow] = useState(false);
  const [advanceshow, setAdvanceShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Advance button Pop-Up Modal
  const handleAdvanceClose = () => setAdvanceShow(false);
  const handleAdvanceShow = () => setAdvanceShow(true);

  return (
    <>

      <section className='hero-homg-bg-img mb-0 pb-0' style={{ position: 'relative' }}>
        <Container>
          <Row className='pt-20' style={{ marginBottom: 40 }}>
            <Col md={8}>
              <h1 className='font-bold' style={{ color: 'white', fontSize: 40 }} >
                Welcome to <br />
                <strong className='display-1 font-normal' style={{ fontSize: 112 }}>Ejar</strong> <br />
                Your rent is a click away
              </h1>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{ paddingTop: 150 }}
            >
              <h4
                className="mt-5 font-bold text-white"
                style={{ fontSize: 40 }}
              >
                Promote your <br /> estate <br />
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

          <Row className='rounded-lg mt-auto d-none d-lg-flex'
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
              <Row className='rounded px-5 py-4 text-dark w-75 text-center m-auto mt-5' style={{ background: 'rgba(255,255,255, 0.85)' }}>
                <Col md={3} className='m-auto'>
                  <Fade direction="right" fraction={0.5} cascade delay={80}>
                    <Dropdown>
                      <DropdownToggle variant="default" id="dropdown-basic" className='border-0'>
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
                      <DropdownToggle variant="default" id="dropdown-basic" className='border-0'>
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
              <Row className='m-auto py-4'>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/apartments.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Apartments</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/apartments-black.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Whole Floor</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/villa.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Vilas</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/artboard-6.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Offices</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/stores.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Stores</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="secondary" style={{ fontWeight: '700' }} className='d-flex'>
                    <img src={"/icons/storage.svg"} style={{ width: '40px' }} />
                    <span style={{ alignContent: 'center' }}>Storages</span>
                  </Button>
                </Col>
              </Row>
            </Slide>
          </Row>

        </Container>
      </section>


      <section className="browse-rentsec position-relative">
        <div className="overlay">
          <Container>
            <Row className="align-items-stretch">
              <Col md={6} className="my-5 py-5">
                <Row>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/apartments-black.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Apartments</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/storage.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Full Floors</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/artboard-6.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Offices</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/villa.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Villas</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/storage.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Stores</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="brdrd-imges text-center my-3">
                      <img src="/icons/storage.svg" alt="browser-apartment for rent" />
                      <h1 className="text-dark mt-0 pt-0">Storages</h1>
                      <Button variant="success" className="px-5 font-bold my-4" style={{ fontSize: 23 }}>
                        Explore
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col
                md={6}
                className="d-flex flex-column justify-content-between align-items-center text-center browse-text-col my-5 py-5"
              >
                <h1 className="display-1 fw-bolder">Browse.</h1>
                <h1 className="display-1 fw-bolder">Rent.</h1>
                <h1 className="display-1 fw-bolder">Settle In!</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <hr className="hr-line-browse" />
      </section>



      <section style={{ backgroundColor: '#383838ff' }}>
        <Container>
          <h1 className='display-1 fw-bolder pt-5 font-bold text-white'>Here&apos;s what&apos;s new</h1>
          <h3 className='text-white'>more here &gt; </h3>

          <Row className='what-new-bg m-auto rounded-lg my-5'>
            <Col md={4} className='border border-warning text-center' style={{ height: '92%', marginTop: '3%', marginLeft: '3%', borderWidth: '15px !important' }}>
              <img src="/logo.svg" className="m-auto mt-4" style={{ width: '90px', height: '40px' }} />
              <h2 className='display-5 fw-bolder text-white' style={{ marginTop: '75%' }}>
                Sabah Al Salim
              </h2>
              <h3 className='text-white'>
                Apartment - 3 bedroom <br />
                with a balcony
              </h3>
              <Button
                variant="success"
                className="text-white font-bold mb-3"
                style={{
                  fontSize: '22px',
                  width: '70%',
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className='what-new-bg m-auto rounded-lg'>
            <Col md={4} className='border border-warning text-center' style={{ height: '92%', marginTop: '3%', marginLeft: '3%', borderWidth: '15px !important', position: 'relative' }}>

              <h2 className='display-5 fw-bolder text-white' style={{ marginTop: '15%', marginBottom: '15%' }}>
                Rent a Vila
              </h2>
              <h3 className='text-white'>
                In Abdullah Al Salim
              </h3>
              <Button variant="success" className='text-white font-bold mt-4' style={{
                fontSize: '22px',
              }}>learn more</Button>
              <img src="/logo.svg" className="m-auto" style={{
                width: '90px', height: '40px', position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
              }} />
            </Col>
          </Row>


          <Row className='promote-section-bg m-auto rounded-lg text-center mt-5 mb-0'>
            <h1 className='display-1 fw-bolder text-white font-bold' style={{ marginTop: '15%' }}>
              <span style={{ fontSize: '110px' }}>Promote</span> <br />
              <span>Your estate today!</span>
            </h1>
            <Button variant="warning" className='mt-4 w-25 m-auto fw-bold font-bold mb-5' style={{ marginBottom: '72%', fontSize: '40px', marginLeft: 25, marginRight: 25 }} onClick={handleShow}>Promote Here</Button>
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
            <small id="radio" class="form-text text-secondary pb-1">Basement</small>
            <Form.Check type="radio" label="Yes" name="1" aria-label="radio 1" />
            <Form.Check type="radio" label="No" name="1" aria-label="radio 2" />
          </Form>

          <div className='text-center'>
            <Button variant="warning" className='mt-4 fw-bold px-5'>Search</Button>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Page;
