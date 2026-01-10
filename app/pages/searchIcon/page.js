"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Row, Col, Button, } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { BsFillPersonPlusFill } from "react-icons/bs";
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

import { Fade } from "react-awesome-reveal";
import { GetPropertyTypes } from '../../store/app/propertyTypes/slice';
import { GetAreas } from '../../store/app/areas/slice';
import 'swiper/css';
import { useDispatch } from 'react-redux';


const propertyTypeOptions = [
    { id: 1, name: "Villas", icon: MdOutlineVilla },
    { id: 2, name: "Apartment", icon: BsBuilding },
    { id: 3, name: "Whole Floor", icon: GoStack },
    { id: 4, name: "Store", icon: FaStore },
    { id: 5, name: "Storage", icon: LuWarehouse },
    { id: 6, name: "Office", icon: FiBriefcase }
];


const SearchIconPage = () => {
    const dispatch = useDispatch()
    const [areas, setAreas] = useState([])
    const [propertyTypes, setPropertyTypes] = useState([])
    useEffect(() => {
        const GetPropertyTypesList = async () => {
            const res = await dispatch(GetPropertyTypes())
            if (res?.payload) {
                const options = res?.payload
                setPropertyTypes(options)
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
    const [show, setShow] = useState(false);
    const [advanceshow, setAdvanceShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);

    const handleClose = () => setShow(false);

    // Advance button Pop-Up Modal
    const handleAdvanceClose = () => setAdvanceShow(false);
    const handleAdvanceShow = () => setAdvanceShow(true);

    const [filterData, setFilterData] = useState({
        filter: {
            areas: [],
            blocks: [],
            propertyTypes: [],
            specialFeatures: [],
            displayOptions: []
        },
        listingStatus: "Published",
        pageNo: 1,
        pageSize: 25
    });

    console.log('filter Icon:',filterData)
    const handleToggleArrayChange = (key, value) => {
        const numericValue = Number(value);

        setFilterData((prevState) => {
            // Check if the clicked value is already the selected one
            const currentValues = Array.isArray(prevState.filter[key])
                ? prevState.filter[key]
                : [];

            // Toggle logic: If clicking the same one, clear it. If clicking a new one, replace it.
            const isAlreadySelected = currentValues.includes(numericValue);
            const newValues = isAlreadySelected ? [] : [numericValue];

            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    [key]: newValues, // This ensures it is always [id] or []
                },
                pageNo: 1,
            };
        });
    };

    const handleAdvanceSearch = () => {
        if (!filterData || !filterData.filter) return;

        const { filter, listingStatus, pageNo, pageSize } = filterData;

        // Build query string
        const query = new URLSearchParams({
            CityId: filter.areas?.join(",") || "",
            blocks: filter.blocks?.join(",") || "",
            Id: filter.propertyTypes?.join(",") || "",
            specialFeatures: filter.specialFeatures?.join(",") || "",
            displayOptions: filter.displayOptions?.join(",") || "",
            listingStatus: listingStatus || "",
            pageNo: pageNo?.toString() || "1",
            pageSize: pageSize?.toString() || "25"
        }).toString();
        router.push(`/app-pages/search-result-page?${query}`);
    };


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>



            {/* Advance Button Modal  */}
            <Modal show={advanceshow} onHide={handleAdvanceClose} dialogClassName="custom-modal">
                <Modal.Header className='fw-bolder' closeButton>
                    Advanced Search
                </Modal.Header>

                <Modal.Body className='p-4'>
                    <h3>Property Type</h3>
                    <Row>
                        {propertyTypes.map((item) => {
                            const matched = propertyTypeOptions.find((x) => x.name.toLowerCase() === item.name_En.toLowerCase());
                            const Icon = matched?.icon;

                            return (
                                <Col
                                    key={item.id}
                                    md={4}
                                    className="text-center mb-3"
                                    onClick={() => {
                                        setSelectedType(item.id);
                                        handleToggleArrayChange("propertyTypes", [Number(item.id)]);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div
                                        className="pt-2 pb-1 rounded-lg text-center"
                                        style={{
                                            background: selectedType === item.id
                                                ? "rgba(255, 255, 255, 0.25)"   // Active color
                                                : "rgba(255, 255, 255, 0.05)", // Default
                                            border: selectedType === item.id ? "2px solid #fff" : "2px solid transparent",
                                            transition: "0.2s"
                                        }}
                                    >
                                        <Icon className="display-5 m-auto pb-2" />
                                        <p>{direction === 'rtl' ? item.name_Ar : item.name_En}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>

                    <Form.Select className="border-0 rounded-2 px-4 py-2 bg-light text-dark mb-3" onChange={handleToggleArrayChange("areas", e.target.value)} style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                        <option>Areas</option>
                        {areas?.map((type) => (
                            <option key={type?.id} value={type?.id}>{type?.name_en}</option>
                        ))}
                    </Form.Select>
                    {/* <Dropdown>

                        <Dropdown.Toggle id="dropdown-basic" className="w-100 d-flex justify-content-between align-items-center mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                            Select Area
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

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
                        <Row className='rounded px-5 pb-4 text-dark w-100 text-center m-auto' >
                            <Col sm={12} md={3} className='m-auto' style={{ marginBottom: 10 }}>
                                <Fade direction="right" fraction={0.5} cascade delay={80}>
                                    {/* <Dropdown>
                                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 px-4 py-2 bg-light text-dark w-100">
                                            Areas
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#/action-1">Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> */}
                                    <Form.Select className="border-0 rounded-2 px-4 py-2 bg-light text-dark" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                                        <option>Areas</option>
                                        {areas?.map((type) => (
                                            <option key={type?.id} value={type?.id}>{type?.name_en}</option>
                                        ))}
                                    </Form.Select>
                                </Fade>
                            </Col>
                            <Col sm={12} md={5} className='m-auto'>
                                <Fade direction="right" fraction={0.5} cascade delay={130}>
                                    <Form.Select className="border-0 rounded-2 px-4 py-2 bg-light text-dark" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                                        <option>Property Type</option>
                                        {propertyTypes?.map((item, index) => (
                                            <option key={index} value={item?.id}>{item?.name_En}</option>
                                        ))}
                                    </Form.Select>
                                    {/* <Dropdown>
                                        <DropdownToggle variant="default" id="dropdown-basic" className="border-0 rounded-2 w-100 px-4 py-2 bg-light text-dark ">
                                            Select Property Type
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#/action-1">Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> */}
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

export default SearchIconPage