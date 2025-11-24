"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Modal from 'react-bootstrap/Modal';
// import Select from "react-select";

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
import { useRouter } from 'next/navigation';
import SearchIconPage from './app-pages/searchIcon/page';
import { useDispatch } from 'react-redux';
import { GetPropertyTypes } from './store/app/propertyTypes/page.js';
import { GetAreas } from './store/app/areas/page.js';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const products = [
  { image: '/icons/apartments-black.svg', label: 'Apartment' },
  { image: '/icons/villa.svg', label: 'Full Floors' },
  { image: '/icons/artboard-6.svg', label: 'Offices' },
  { image: '/icons/villa.svg', label: 'Villas' },
  { image: '/icons/stores.svg', label: 'Stores' },
  { image: '/icons/storage.svg', label: 'Storage' },
];

const areaOptions = [
  { value: "action1", label: "Action 1" },
  { value: "action2", label: "Action 2" },
  { value: "action3", label: "Action 3" },
  { value: "action4", label: "Action 4" },
  { value: "action5", label: "Action 5" }
];

const initialState = {
  id: 0,
  userId: 0,
  title: "",
  areaId: 0,
  blockId: 0,
  propertyTypeId: 0,
  listingStatus: "",
  masterRoom: 0,
  standardRoom: 0,
  maidRoom: 0,
  areaSize: 0,
  bathroom: 0,
  price: 0,
  contactName: "",
  email: "",
  whatsapp: "",
  isConcent: true,
  description: "",
  createdAt: new Date().toISOString(),
  createdBy: 0,
  modifiedAt: new Date().toISOString(),
  modifiedBy: 0,
  videoUrl: "",
  tblListingFeatures: [
    { featureId: 0 }
  ],
  tblListingDisplayOptions: [
    { displayOptionId: 0 }
  ]
};



const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [areas, setAreas] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  useEffect(() => {
    const GetPropertyTypesList = async () => {
      const res = await dispatch(GetPropertyTypes())
      if (res?.payload) {
        const areaOptions = res?.payload
        setPropertyTypes(areaOptions)
      }
    }
    const GetAreasList = async () => {
      const response = await dispatch(GetAreas())
      if (response?.payload) {
        const areaOptions = response?.payload
        setAreas(areaOptions)
      }
    }
    GetAreasList()
    GetPropertyTypesList()
  }, [dispatch])

  const [advanceshow, setAdvanceShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const [showSinleAd, setShowSingleAd] = useState(false);
  const handleCloseSingleAd = () => setShowSingleAd(false);
  const handleShowSingleAd = () => setShowSingleAd(true);

  const [show, setShow] = useState(false);
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
                    {/* <Fade direction="right" fraction={0.5} cascade delay={80}>
                      <Dropdown>
                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark">
                          Areas
                        </DropdownToggle>
                        <DropdownMenu className="custom-dropdown-menu">
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Fade> */}
                    <Fade direction="right" fraction={0.5} cascade delay={80}>
                      <Form.Select className="border-0 rounded-2 px-4 py-2 bg-light text-dark">
                        <option>Areas</option>
                        {areas?.map((type,index) => (
                          <option key={index} value={type?.id}>{type?.name_en}</option>
                        ))}
                      </Form.Select>
                      {/* <Select
                        options={propertyTypes}
                        placeholder="Areas"
                        isSearchable={true}
                        // className="w-100"
                        className="w-100 border-0 rounded-2 bg-light text-dark custom-dropdown-menu"
                      /> */}
                    </Fade>
                  </Col>
                  <Col md={4} className='m-auto'>
                    <Fade direction="right" fraction={0.5} cascade delay={130}>
                      <Form.Select className="border-0 rounded-2 px-4 py-2 bg-light text-dark">
                        <option>Select Property Type</option>
                        {propertyTypes?.map((type, index) => (
                          <option key={index} value={type?.id}>{type?.name_En}</option>
                        ))}
                      </Form.Select>
                      {/* <Dropdown>
                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark ">
                          Select Property Type
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem href="#/action-1">Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown> */}
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
                  {/* {[
                    { img: "/icons/apartments.svg", text: "Apartments" },
                    { img: "/icons/apartments-black.svg", text: "Whole Floor" },
                    { img: "/icons/villa.svg", text: "Vilas" },
                    { img: "/icons/artboard-6.svg", text: "Offices" },
                    { img: "/icons/stores.svg", text: "Stores" },
                    { img: "/icons/storage.svg", text: "Storages" },
                  ] */}
                  {propertyTypes?.map((item, i) => (
                    <div className="property-item" key={i}>
                      <Link href={`/pages/browser-page?Name=${item?.name_En}&Id=${item?.id}`} className="text-decoration-none">
                        <Button
                          variant="secondary"
                          style={{ fontWeight: "700" }}
                          className="d-flex align-items-center gap-2 w-100"
                        >
                          <img src={baseURL + item?.icon} style={{ width: "40px" }} alt={item?.name_En} />
                          <span>{item?.name_En}</span>
                        </Button>
                      </Link>
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
                <Row className="align-items-stretch ">
                  <Col md={12} className='d-block d-lg-none'>
                    <h1 className="display-4 fw-bolder mb-4 text-black">Browse. Rent. Settle In!</h1>
                  </Col>
                  {propertyTypes?.map((type,index) => (
                    <Col md={6} key={index} className='mobileViewOff'>
                      <div className="brdrd-imges text-center my-3">
                        <img src={baseURL + type?.icon} alt="browser-apartment for rent broswer-img" className='broswer-img' />
                        <h2 className="text-dark mt-0 pt-0">{type?.name_En}</h2>
                        <Link href={`/pages/browser-page?Name=${type?.name_En}&Id=${type?.id}`}>
                          <Button
                            variant="success"
                            className="px-5 font-bold my-4 myButton">
                            Explore
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  ))}
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
                  {propertyTypes?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Col sm={12} md={12}>
                        <div className="brdrd-imges text-center my-3">
                          <img src={baseURL + item?.icon} alt="browser-apartment for rent broswer-img" className='broswer-img' />
                          <h2 className="text-dark mt-0 pt-0">{item.name_En}</h2>
                          <Link href={`/pages/browser-page?Name=${item?.name_En}&Id=${item?.id}`}>
                            <Button variant="success" className="px-5 font-bold my-4 myButton">
                              Explore
                            </Button>
                          </Link>
                        </div>
                      </Col>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Row>

              <Col
                md={6}
                className="d-flex d-none d-lg-flex flex-column text-black justify-content-between  text-left browse-text-col my-5 py-5 px-5"
                style={{ paddingTop: '180px !important', paddingBottom: '180px !important', textAlign: 'left !important' }}
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

      <SearchIconPage />
      <Modal show={show}
        onHide={handleClose}
        //style={{ marginTop: '10%' }} 
        dialogClassName="Promote-modal"
      >
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
                <Button
                  variant="warning"
                  onClick={() => {
                    handleClose();
                    handleShowSingleAd();
                  }}
                  className='mt-4 fw-bold px-5'
                >Select</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>


      <Modal show={showSinleAd}
        onHide={handleCloseSingleAd}
        //style={{ marginTop: '10%' }}
        dialogClassName="Single Ad-modal"
      >
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body className='py-5 bg-dark text-white'>
          <Row className="g-3">
            <Col md={12} className='text-center'>
              <div style={{ display: 'flex', borderBottom: '1px solid yellow', flexDirection: 'column', paddingBottom: 10 }}>
                <BsFillPersonPlusFill className='text-warning display-2 m-auto' size={34} />
                <h5 className='text-center fw-bold'>Individual Promotion Application</h5>
              </div>
            </Col>
            <Col md={12} >
              <h4 className='fw-bold'>Contact Information</h4>
            </Col>
            <Col md={12} >
              <label className='fw-semibold mb-2'>whatsapp Number</label>
              <input type="text" className='form-control rounded-2' value={formData?.whatsapp} name='whatsapp' placeholder='Enter whatsapp Number' />
            </Col>
            <Col md={12} >
              <label className='fw-semibold mb-2'>Email (optional)</label>
              <input type="text" className='form-control rounded-2' placeholder='Enter Email Address' />
            </Col>
            <Col md={12} >
              <h4 className='fw-bold'>Property and Pricing</h4>
            </Col>
            <Col md={12} >
              <select className='form-select rounded-2'>
                <option>Select Area</option>
                {areas?.map((item,index) => (
                  <option key={index} value={item?.id}>{item?.name_en}</option>
                ))}
              </select>
            </Col>
            <Col md={12} >
              <select className='form-select rounded-2'>
                <option>Select Block</option>
                {/* {areas?.map((item) => (
                  <option value={item?.id}>{item?.name_en}</option>
                ))} */}
              </select>
            </Col>
            <Col md={12} >
              <select className='form-select rounded-2'>
                <option>Property Type</option>
                {propertyTypes?.map((type,index) => (
                  <option key={index} value={type?.id}>{type?.name_En}</option>
                ))}
              </select>
            </Col>
            <Col md={12} >
              <input type="text" className='form-control rounded-2' placeholder='Price (kwd)' />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Page;
