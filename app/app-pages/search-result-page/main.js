"use client"; // ← important

import React from "react";
import { Spin } from "antd";
import { Card, Button, Carousel } from "react-bootstrap";
import { Modal, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIconPage from "../searchIcon/page";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GetPropertyListing, GetPropertyListingById } from "../../store/app/propertyListing/slice";
import { useDispatch, useSelector } from "react-redux";
import { MdDirectionsCar, MdBathtub, MdStore, MdLiving } from "react-icons/md";
import { MdLabel, MdLabelOutline } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { FaTree, FaParking, FaConciergeBell } from "react-icons/fa";
import { MdPark, MdBeachAccess } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaBed } from "react-icons/fa";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export default function SearchResultPage() {
  const searchParams = useSearchParams();     // query params
  const dispatch = useDispatch();
  const { data, loading, status } = useSelector(state => state.propertyListing);
  const id = searchParams.get("Id");
  const TypeName = searchParams.get("Name");
  const CityId = searchParams.get("CityId");
  const CityName = searchParams.get("CityName");
  const [selectedId, setSelectedId] = useState(null);
  const [advanceshow, setAdvanceShow] = useState(false);
  const [whatsappshow, setWhatsappshow] = useState(false)
  const handleAdvanceClose = () => setAdvanceShow(false);
  const handleAdvanceShow = () => setAdvanceShow(true);
  const handleWhatsappClose = () => setWhatsappshow(false);
  const handleWhatsappShow = () => setWhatsappshow(true);
  const [propertyList,setPropertyList]=useState([])
  const [filterBody, setFilterBody] = useState({
    filter: {
      areas: CityId ? [Number(CityId)] : [],
      blocks: [],
      propertyTypes: id ? [Number(id)] : [],
      minPrice: 0,
      maxPrice: 0,
      specialFeatures: [],
      displayOptions: []
    },
    listingStatus: "Published",
    pageNo: 1,
    pageSize: 20
  });
  const [singlePropertyData, setSinglePropertyData] = useState(null);
  console.log('propertyList:', propertyList)
  const GetSingleProperty = async () => {
    const response = await dispatch(GetPropertyListingById(selectedId));
    if (response && response.payload) {
      const property = response.payload;
      setSinglePropertyData(property);
    }
  }
  console.log("Filter Body:", filterBody);
  useEffect(() => {
    const GetProperties = async () => {
      const res = await dispatch(GetPropertyListing(filterBody));
      if (res && res.payload) {
        setPropertyList(res.payload);
      }
    }
    GetProperties()
    //dispatch(GetPropertyListing(filterBody));
    if (selectedId) {
      GetSingleProperty()
    }
  }, [dispatch, filterBody, selectedId]);

  console.log("Search Results Data:", data);

  const desktopHeight = 346; // fixed desktop card height
  const router = useRouter();
  return (
    <>
      <div className="mt-40 mb-10 my-5 p-3">
        <h1 className="font-bold text-3xl mb-4 text-center text-white pt-10 w-75 mx-auto" style={{ borderBottom: '2px solid #F7BC08' }}>
          {TypeName && TypeName.trim() !== "" && (
            <span>{TypeName}</span>
          )}
          {CityName && CityName.trim() !== "" && (
            <span> - {CityName} - block 4 - 6 rooms - 4 bathrooms - 2 floors</span>
          )}
        </h1>
        <div className="row w-100">
          <div className="col-md-6" style={{ padding: 5 }}>
            <div className="w-100" style={{ overflowY: 'auto', borderRadius: 20, border: '5px solid yellow', padding: 20, maxHeight: '100vh', height: '100vh' }}>
              {selectedId && (
                <>
                  <div className="mt-10">
                    <Carousel>
                      {singlePropertyData?.tblListingImages?.map((img, index) => (
                        <Carousel.Item key={index} style={{ height: "300px" }}>
                          <img
                            src={img?.imagePath ? baseURL + '/' + img?.imagePath : 'https://img.freepik.com/premium-vector/black-white-drawing-house-with-house-background_988535-1228.jpg?semt=ais_hybrid&w=740&q=80'}
                            alt={`Slide ${img?.imageName}`}
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
                  <h2 className="mt-2 mb-2">
                    {singlePropertyData?.title}
                  </h2>
                  <div className="d-flex gap-3 mt-2 mb-2" style={{ color: '#7a7a7aff' }}>
                    <div className="d-flex"><FaCouch size={24} /> 3</div> |
                    <div className="d-flex"><FaBed size={24} /> 1</div> |
                    <div className="d-flex"><MdBathtub size={24} /> 2</div> |
                    <div className="d-flex"><MdStore size={24} /> 1</div>
                  </div>

                  <div className="col-12 col-md-12 mb-2 text-center d-flex justify-content-center gap-3">
                    <button className="btn" onClick={handleAdvanceShow} style={{ backgroundColor: '#F7BC08', color: '#fff', padding: 10, width: '35%', fontSize: 17, fontWeight: '600' }}>
                      Call Estate Owner
                    </button>
                    <button className="btn" onClick={handleWhatsappShow} style={{ backgroundColor: '#4DB6AC', color: '#fff', padding: 10, width: '35%', fontSize: 17, fontWeight: '600' }}>
                      Whatsapp
                    </button>
                  </div>
                  <iframe
                    src={`https://www.google.com/maps?q=loc:${selectedId}&output=embed`}
                    width="100%" />

                    <p className="pt-2">
                      {singlePropertyData?.description}
                    </p>
                </>

              )}
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundColor: '#000',
              borderRadius: 20,
              padding: 5,
              paddingTop: 20,
              maxHeight: '100vh',   // or any height you want
              overflowY: 'auto'    // enables vertical scroll
            }}
          >
            <div className="row">
              {propertyList?.length > 0 &&
                propertyList.map((property, index) => (
                  <div className="col-md-10 mx-auto mb-4" key={index}>
                    <div className="card mb-3" style={selectedId === property?.id ? { backgroundColor: '#F7BC08' } : { backgroundColor: '#fff' }} onClick={() => setSelectedId(property?.id)}>
                      <div className="row g-0" >
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">2 rooms + 1 master</h5>
                            <h5 className="card-title">{property?.title}</h5>
                            <div className="d-flex gap-3" style={{ color: '#7a7a7aff' }}>
                              <div className="d-flex"><MdLabel size={24} /> Street Name, City</div>
                            </div>

                            <div className="d-flex gap-3" style={{ color: '#7a7a7aff' }}>
                              <div className="d-flex"><FaCouch size={24} /> 3</div> |
                              <div className="d-flex"><FaBed size={24} /> 1</div> |
                              <div className="d-flex"><MdBathtub size={24} /> 2</div> |
                              <div className="d-flex"><MdStore size={24} /> 1</div>
                            </div>
                            <h4>{property?.price} KWD</h4>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={
                              property?.imageUrl === null
                                ? 'https://img.freepik.com/premium-vector/black-white-drawing-house-with-house-background_988535-1228.jpg?semt=ais_hybrid&w=740&q=80'
                                : baseURL + '/' + property?.imageUrl
                            }
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{ height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
      <SearchIconPage />
    </>
  );
}
