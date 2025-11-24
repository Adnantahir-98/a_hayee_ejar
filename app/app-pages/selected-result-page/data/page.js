"use client";
import React, { useEffect, useState } from "react";
import SearchIconPage from "../../searchIcon/page";
import { Modal,Col,Carousel, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function SelectedResultPage() {
  const [show, setShow] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800",
  ];
  const imageslist = [
    { image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" },
    { image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" },
  ]

  return (
    <div className="mt-30 my-5 p-3">
      <h1 className="font-bold text-3xl mb-4 text-center text-white pt-10 w-75 mx-auto" style={{ borderBottom: '2px solid yellow' }}>
      </h1>
      <div className="mt-10">
        <Carousel>
          {images.map((img, index) => (
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
        <p className="py-3" style={{ fontWeight: '600', textAlign: 'center', color: 'grey' }}>Name and location</p>
        <div className="row">
          <div className="col-12 col-md-6 d-none d-lg-flex">
            <div className="row">
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
              <div className="col-12 col-md-6 my-2">
                <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800" onClick={() => setShow(true)} alt="Property" className="img-fluid rounded-lg" />
              </div>
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
          </div>
        </div>
      </div>
      <div className="pb-15" style={{ backgroundColor: '#F7BC08' }}>
        <h4 className="text-black py-3 px-3" style={{ fontWeight: '600' }}>More info</h4>
        <h5 className="px-3 pb-3 text-black">
          Villa in Abu Al hasaniya, with a garden, 6 rooms, 4 bathrooms one of which is a master bathroom. 2 floors, with 2 kitchens. A yard with a swimming pool.
        </h5>
        <h5 className="px-3 pb-3 text-black" >
          A beach is within waling distance from the house, as well as a restaurant complex in the same block.
        </h5>
      </div>
      <div className="py-10">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="text-white px-3" style={{ fontWeight: '600' }}>Facilities</h3>
            <ul className="list-unstyled " style={{ marginLeft: 20, fontSize: 21, fontFamily: 'arial', marginTop: 30 }}>
              <li className="text-white my-4 px-3">Beach</li>
              <li className="text-white my-4 px-3">Near Co-op</li>
              <li className="text-white my-4 px-3">Restaurants</li>
              <li className="text-white my-4 px-3">Swimming Pool</li>

            </ul>
          </div>
          <div className="col-12 col-md-6" style={{ borderLeftWidth: 1, borderLeftColor: 'grey' }}>
            <h3 className="text-white px-3" style={{ fontWeight: '600' }}>Conditions</h3>
            <ul className="list-unstyled " style={{ marginLeft: 20, fontSize: 21, fontFamily: 'arial', marginTop: 30 }}>
              <li className="text-white my-2 px-3">Pets allowed</li>
              <li className="text-white my-2 px-3">Family only</li>
              <li className="text-white my-2 px-3">Parking for 3 cars max</li>
              <li className="text-white my-2 px-3">Kuwaitis and ex-pats allowed</li>
              <li className="text-white my-2 px-3">Salary certificate required</li>
            </ul>

          </div>
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
            src={'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800'}
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

      {/* Optional global CSS for smooth appearance */}
      <style jsx global>{`
        .image-modal .modal-dialog {
          max-width: 900px;
        }
        .image-modal .modal-content {
          background: transparent;
          border: none;
        }
      `}</style>


      <SearchIconPage />

    </div>
  );
}
