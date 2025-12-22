"use client";
import React, { useEffect, useState } from "react";
import SearchIconPage from "../searchIcon/page";
import { useSearchParams } from "next/navigation";
import { Modal, Col, Carousel, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetPropertyListingById } from "../../store/app/propertyListing/slice";
import { GetPropertyTypes } from '../../store/app/propertyTypes/slice';
import { GetAreas } from '../../store/app/areas/slice'
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import 'swiper/css';
import { useDispatch, useSelector } from "react-redux";
import './mystyle.css'
import { MdDirectionsCar, MdBathtub, MdStore, MdLiving } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { FaTree, FaParking, FaConciergeBell } from "react-icons/fa";
import { MdPark, MdBeachAccess } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const featureIcons = {
  "Garden": <FaTree />,
  "Park": <MdPark />,
  "Beach View": <MdBeachAccess />,
  "Services": <FaConciergeBell />,
  "Extra Parking": <FaParking />,
};

export default function SelectedResultPage() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const [advanceshow, setAdvanceShow] = useState(false);
  const [whatsappshow, setWhatsappshow] = useState(false)
  const handleAdvanceClose = () => setAdvanceShow(false);
  const handleAdvanceShow = () => setAdvanceShow(true);
  const handleWhatsappClose = () => setWhatsappshow(false);
  const handleWhatsappShow = () => setWhatsappshow(true);
  const searchParams = useSearchParams();
  const productId = searchParams.get("product-id");
  const { data, loading, status } = useSelector(state => state.propertyListing);

  const [propertyTypes, setPropertyTypes] = useState([])
  const [areas, setAreas] = useState([])
  const phone = data?.whatsapp?.replace(/\D/g, '');
  useEffect(() => {
    if (productId) {
      dispatch(GetPropertyListingById(productId));
    }
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
  }, [productId, dispatch]);


  //GetPropertyListingById
  const images = data?.tblListingImages
    ?.map(item => ({
      image: baseURL + item.imagePath
    }))
    .map(imgObj => imgObj.image);

  const imageslist = data?.tblListingImages?.map(item => ({
    image: baseURL + item.imagePath
  }));
  // const imageslist = [
  //   { image: "https://img.freepik.com/premium-vector/black-white-drawing-house-with-house-background_988535-1228.jpg?semt=ais_hybrid&w=740&q=80" },
  //   { image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" },
  // ]

  return (
    <div className="mt-30 my-5 p-3">
      <h1 className="font-bold text-3xl mb-4 text-center text-white pt-10 w-75 mx-auto" style={{ borderBottom: '2px solid yellow' }}>
      </h1>
      <div className="mt-10">
        <Carousel>
          {images?.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="d-block w-100"
                style={{
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="py-10 bg-white rounded-lg shadow-md px-6">
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
            {imageslist?.map((item, index) => (
              <SwiperSlide key={index}>
                <Col sm={6}>
                  <div className="">
                    <img src={item.image} alt="browser-apartment for rent broswer-img" className='broswer-img' />
                  </div>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <h2 className="text-black" style={{ fontWeight: '800', textAlign: 'center' }}>Property information</h2>
        <p className="py-3" style={{ fontWeight: '600', textAlign: 'center', color: 'grey' }}>{data?.title} in {data?.tblArea?.name_en}</p>
        <div className="row">
          <div className="col-12 col-md-6 d-none d-lg-flex">
            <div className="row">
              {imageslist?.map((item, index) => (
                <div key={index} className="col-12 col-md-6 my-2">
                  <img
                    src={item?.image}
                    onClick={() => {
                      setSelectedImage(item?.image);
                      setShow(true);
                    }}
                    alt="Property"
                    className="img-fluid rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-12 col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781277.5572392708!2d46.36058163327055!3d29.309982223880784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2s!4v1762446035546!5m2!1sen!2s"
              width="100%"
              height="380px"
              className=""
              style={{ borderRadius: '10px', border: '9px solid ', borderColor: '#F7BC08' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
            <div className="row">
              <div className="col-12 col-md-12" style={{ justifyContent: 'center', justifyItems: 'center', padding: 14 }}>
                <div className="d-flex gap-3" style={{ color: '#7a7a7aff' }}>
                  <div className="d-flex"><FaCouch size={24} /> 3</div> |
                  <div className="d-flex"><FaBed size={24} /> 1</div> |
                  <div className="d-flex"><MdBathtub size={24} /> 2</div> |
                  <div className="d-flex"><MdStore size={24} /> 1</div>
                </div>
              </div>

              <div className="col-12 col-md-12 text-center">
                <h1 style={{ color: '#000' }}>{data?.price} KWD</h1>
              </div>
              <div className="col-12 col-md-12 text-center d-flex justify-content-center gap-3">
                <button className="btn" onClick={handleAdvanceShow} style={{ backgroundColor: '#F7BC08', color: '#fff', padding: 10, width: '35%', fontSize: 17, fontWeight: '600' }}>
                  Call Estate Owner
                </button>
                <button className="btn" onClick={handleWhatsappShow} style={{ backgroundColor: '#4DB6AC', color: '#fff', padding: 10, width: '35%', fontSize: 17, fontWeight: '600' }}>
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-15" style={{ backgroundColor: '#F7BC08' }}>
        <h4 className="text-black py-3 px-3" style={{ fontWeight: '600' }}>More info</h4>
        <h5 className="px-3 pb-3 text-black">
          {data?.description}
        </h5>
      </div>
      <div className="py-10">
        <div className="row">
          {data?.tblListingFeatures?.length > 0 && (
            <div className="col-12 col-md-6">
              <h3 className="text-white px-3" style={{ fontWeight: '600' }}>Facilities</h3>
              <ul className="list-unstyled " style={{ marginLeft: 20, fontSize: 21, fontFamily: 'arial', marginTop: 30 }}>
                {data?.tblListingFeatures?.map((feature, index) => (
                  <li className="text-white my-4 px-3 d-flex align-items-center" key={index}>
                    <span className="me-3" style={{ fontSize: 24 }}>
                      {featureIcons[feature?.tblPropertyFeature?.name] || <BsDot />}
                    </span>
                    {feature?.tblPropertyFeature?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data?.tblListingConditions?.length > 0 && (
            <div className="col-12 col-md-6" style={{ borderLeftWidth: 1, borderLeftColor: 'grey' }}>
              <h3 className="text-white px-3" style={{ fontWeight: '600' }}>Conditions</h3>
              <ul className="list-disc ps-4" style={{ listStyleType: "disc", paddingLeft: "20px", marginLeft: 20, fontSize: 21, fontFamily: 'arial', marginTop: 30 }}>
                {data?.tblListingConditions?.map((condition, index) => (
                  <li className="text-white my-2 px-3" key={index}> {condition?.tblPropertyCondition?.name}</li>
                ))}
              </ul>

            </div>
          )}
        </div>
      </div>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        className="image-modal"
      >
        <Modal.Body
          className="p-0 d-flex justify-content-center align-items-center bg-transparent"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <img
            src={selectedImage}
            alt={'alt'}
            onClick={() => setShow(false)}
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={advanceshow} onHide={handleAdvanceClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body >
          <div style={{ padding: 40, backgroundColor: '#000', borderRadius: 30 }}>

            <div style={{ padding: 20 }}>
              <img
                src="/logo-white.png"
                alt="Main Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>


            <div
              style={{
                display: 'flex',           // make parent flex
                justifyContent: 'center',  // center horizontally
                alignItems: 'center',      // center vertically
                width: '100%',             // full width
                marginBottom: -15,
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                  display: 'flex',           // center icon inside circle
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaPhone color="#000" size={24} />
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: 30, borderRadius: 30 }}>
              <h3 style={{ color: '#000', textAlign: 'center' }}>Call {data?.contactName}</h3>
              <p style={{ color: '#000', textAlign: 'center' }}>Owner of Estate</p>
              <div style={{ backgroundColor: '#FFB15C', padding: 5, borderRadius: 25, paddingTop: 17 }}>
                <h3 style={{ color: '#000', textAlign: 'center', fontSize: 18 }}>{data?.whatsapp}</h3>
              </div>
            </div>
          </div>




        </Modal.Body>
      </Modal>

      <Modal show={whatsappshow} onHide={handleWhatsappClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body >
          <div style={{ padding: 40, backgroundColor: '#000', borderRadius: 30 }}>



            <div
              style={{
                display: 'flex',           // make parent flex
                justifyContent: 'center',  // center horizontally
                alignItems: 'center',      // center vertically
                width: '100%',             // full width
                marginBottom: -25,
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                  display: 'flex',           // center icon inside circle
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaWhatsapp color="#309608ff" size={32} />
              </div>
            </div>

            <div style={{ backgroundColor: '#fff', padding: 30, borderRadius: 30 }}>
              <p style={{ color: '#000', textAlign: 'center', marginBottom: 0 }}>{data?.contactName}</p>
              <p style={{ color: '#646363ff', fontSize: 12, textAlign: 'center' }}>Whatsapp Buisness Account</p>
              <div
                style={{
                  margin: 20,
                  width: 120,
                  height: 120,
                  borderRadius: 10,
                  overflow: 'hidden',
                  justifySelf: 'center',
                  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                    `https://wa.me/${phone}?text=Hello,%20I%20want%20to%20chat!`
                  )}&size=150x150`}
                  alt="WhatsApp QR Code"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <p style={{ marginTop: 20, fontSize: 12, textAlign: 'center' }}>
              Sacn this code to start a WhatsApp chat
              <br />
              with {data?.contactName}
            </p>
          </div>




        </Modal.Body>
      </Modal>

      {/* Optional global CSS for smooth appearance */}
      <style jsx global>{`
        .image-modal .modal-dialog {
          max-width: 900px;
        }
        .image-modal .modal-content {
          background: #FFC107;
          border: none;
        }
      `}</style>


      <SearchIconPage />

    </div>
  );
}
