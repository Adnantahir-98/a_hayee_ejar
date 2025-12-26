"use client";

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
import { GetConditions } from '../../store/app/conditions/slice'
import { GetFeatures } from '../../store/app/features/slice'
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../context/TranslationContext';

const propertyTypeOptions = [
    { id: 1, name: "Villas", icon: MdOutlineVilla },
    { id: 2, name: "Apartment", icon: BsBuilding },
    { id: 3, name: "Whole Floor", icon: GoStack },
    { id: 4, name: "Store", icon: FaStore },
    { id: 5, name: "Storage", icon: LuWarehouse },
    { id: 6, name: "Office", icon: FiBriefcase }
];

const SearchIconPage = () => {
    const { translate, direction } = useTranslation();
    const dispatch = useDispatch()
    const router = useRouter();
    const [areas, setAreas] = useState([])
    const [propertyTypes, setPropertyTypes] = useState([])
    const [features, setFeatures] = useState([])
    const [conditions, setConditions] = useState([])
    const [propertyTypeId, setPropertyTypeId] = useState(null);
    const [propertyTypeName, setPropertyTypeName] = useState("");
    const [areaId, setAreaId] = useState(null);
    const [areaName, setAreaName] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCondition, setSelectedCondition] = useState(null);

    const [formData, setFormData] = useState({
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


    const handleFilterChange = (e) => {
        setFormData({
            ...formData,
            filter: {
                ...formData.filter,
                [e.target.name]: Number(e.target.value)
            }
        });
    };
    const handleAdvanceSearch = () => {
        if (!formData || !formData.filter) return;

        const { filter, listingStatus, pageNo, pageSize } = formData;

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

    // const handleArrayChange = (name, values) => {
    //     setFormData({
    //         ...formData,
    //         filter: {
    //             ...formData.filter,
    //             [name]: values
    //         }
    //     });
    // };

    const handleArrayChange = (name, value) => {
        setFormData(prev => {
            // 🔴 If propertyTypes → allow ONLY ONE value
            if (name === "propertyTypes") {
                return {
                    ...prev,
                    filter: {
                        ...prev.filter,
                        [name]: value, // overwrite instead of push
                    },
                };
            }

            // 🔵 Default multi-select behavior
            const currentValues = prev.filter[name] || [];
            const exists = currentValues.includes(value);

            return {
                ...prev,
                filter: {
                    ...prev.filter,
                    [name]: exists
                        ? currentValues.filter(v => v !== value)
                        : [...currentValues, value],
                },
            };
        });
    };



    const [blocks, setBlocksArray] = useState([])
    const handleAreaChange = async (e) => {
        const value = Number(e.target.value);
        // setFormData((prev) => ({
        //     ...prev,
        //     areaId: value,
        // }));
        // setFormData((prev) => ({
        //     ...prev,
        //     blockId: 0,
        // }));
        const selectedArea = areas?.find((item) => item.id === value);
        if (selectedArea && selectedArea.blocks) {
            const blocks = selectedArea?.blocks.split("_").map((b) => Number(b.trim()));
            setBlocksArray(blocks);
        } else {
            setBlocksArray([]);
        }
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
        const GetConditionsList = async () => {
            const response = await dispatch(GetConditions())
            if (response?.payload) {
                setConditions(response?.payload)
            }
        }
        const GetFeaturesList = async () => {
            const response = await dispatch(GetFeatures())
            if (response?.payload) {
                setFeatures(response?.payload)
            }
        }
        GetFeaturesList()
        GetConditionsList()
        GetAreasList()
        GetPropertyTypesList()
    }, [dispatch])

    const handleSearch = async (e) => {
        e.preventDefault();
        let queryParams = [];
        if (propertyTypeId) {
            queryParams.push(`Name=${propertyTypeName}`);
            queryParams.push(`Id=${propertyTypeId}`);
        }
        if (areaId) {
            queryParams.push(`CityName=${areaName}`);
            queryParams.push(`CityId=${areaId}`);
        }
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        router.push(`/app-pages/search-result-page${queryString}`);
    }
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


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log("formData.filter.propertyTypes", formData);
    console.log("formData.filter.propertyTypes.includes(1)", formData.filter.propertyTypes.map(Number).includes(1));
    return (
        <>



            {/* Advance Button Modal  */}
            <Modal show={advanceshow} onHide={handleAdvanceClose} dialogClassName="custom-modal">
                <Modal.Header className='fw-bolder' closeButton>
                    {translate('AdvancedSearch')}
                </Modal.Header>

                <Modal.Body className='p-4'>
                    <h3>{translate('PropertyType')}</h3>
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
                                        handleArrayChange("propertyTypes", [Number(item.id)]);
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

                    <Form.Select
                        onChange={(e) => {
                            handleAreaChange(e);
                            handleArrayChange("areas", [Number(e.target.value)]);
                        }}
                        className="border-0 rounded-2 px-4 py-2 mb-3 transparent-select text-dark"
                    >
                        <option value="">{translate('Areas')}</option>
                        {areas?.map((type, index) => (
                            <option key={index} value={type?.id}>
                                {direction === 'rtl' ? type?.name_ar : type?.name_en}
                            </option>
                        ))}
                    </Form.Select>


                    <Form.Select onChange={(e) => handleArrayChange("blocks", [Number(e.target.value)])} className="border-0 rounded-2 px-4 py-2 transparent-select text-dark mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                        <option>{translate('SelectBlock')}</option>
                        {blocks?.map((block, index) => (
                            <option key={index} value={block}>{block}</option>
                        ))}
                    </Form.Select>


                    <Form className='text-white'>
                        <Row className="mb-3">
                            <small id="emailHelp" className="form-text text-secondary pb-1">{translate('BudgetRange')}</small>
                            <Col>
                                <Form.Control type="text" size="sm" placeholder="250" name="minPrice" onChange={handleFilterChange} className='place-clr' />
                            </Col> {translate('To')}
                            <Col>
                                <Form.Control type="text" size="sm" placeholder="260" name="maxPrice" onChange={handleFilterChange} className='place-clr' />
                            </Col>
                        </Row>
                    </Form>

                    <Row>
                        <h5>{translate('Condition')}</h5>

                        {conditions?.map((condition, index) => {
                            const isSelected =
                                formData.filter.displayOptions.includes(condition.id);

                            return (
                                <Col
                                    md={3}
                                    key={index}
                                    onClick={() =>
                                        handleArrayChange("displayOptions", Number(condition.id))
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <div
                                        className="rounded-lg p-2 text-center mb-3"
                                        style={{
                                            background: isSelected
                                                ? "rgba(250, 32, 32, 0.76)"
                                                : "rgba(255, 255, 255, 0.05)",
                                            border: isSelected
                                                ? "2px solid #f12b2bff"
                                                : "2px solid transparent",
                                        }}
                                    >
                                        <small>
                                            {direction === 'rtl' ? condition?.name_ar : condition?.name}
                                        </small>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>


                    <h5>{translate('AdditionalFilters')}</h5>
                    <Form.Select onChange={(e) => handleArrayChange("specialFeatures", [Number(e.target.value)])} className="border-0 rounded-2 px-4 py-2 transparent-select text-dark mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                        <option>{translate('Selectfeature')}</option>
                        {features?.map((item, index) => (
                            <option key={index} value={item?.id}>
                                {direction === 'rtl' ? item?.name_ar : item?.name}
                            </option>
                        ))}
                    </Form.Select>

                    {(formData.filter.propertyTypes.map(Number).includes(1) || formData.filter.propertyTypes.map(Number).includes(3) || formData.filter.propertyTypes.map(Number).includes(4) ) && (
                        <>

                            <small id="emailHelp" className="form-text text-secondary pb-1">{translate('NoOfRooms')}</small>
                            <Form.Select name="rooms" onChange={handleFilterChange} className="border-0 rounded-2 px-4 py-2 transparent-select text-dark mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                                <option value={0}>{translate('SelectRooms')}</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Form.Select>
                            <small id="emailHelp" className="form-text text-secondary pb-1">{translate('NoFloors')}</small>
                            <Form.Select name="floors" onChange={handleFilterChange} className="border-0 rounded-2 px-4 py-2 transparent-select text-dark mb-3" style={{ background: 'rgba(255, 255, 255, 0.07)' }}>
                                <option value={0}>{translate('SelectFloors')}</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Form.Select>
                        </>
                    )}
                    {(formData.filter.propertyTypes.map(Number).includes(5) || formData.filter.propertyTypes.map(Number).includes(6) || formData.filter.propertyTypes.map(Number).includes(2)) && (
                        <>
                            <small id="emailHelp" className="form-text text-secondary pb-1">{translate('SizeMeter')}</small>
                            <Form.Control type="text" size="sm" placeholder={translate('SizeMeter')} name="size" onChange={handleFilterChange} className='place-clr' />
                        </>
                    )}


                    {/* <Form className='text-white'>
                        <small id="radio" className="form-text text-secondary pb-1">Basement</small>
                        <Form.Check type="radio" label="Yes" name="1" aria-label="radio 1" />
                        <Form.Check type="radio" label="No" name="1" aria-label="radio 2" />
                    </Form> */}

                    <div className='text-center'>
                        <Button variant="warning" onClick={handleAdvanceSearch} className='mt-4 fw-bold px-5'>{translate('Search')}</Button>
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

                                    <Form.Select
                                        onChange={(e) => {
                                            const selectedId = e.target.value;
                                            const selectedName = e.target.options[e.target.selectedIndex].text;
                                            setAreaId(selectedId);
                                            setAreaName(selectedName);
                                        }}
                                        className="border-0 rounded-2 px-4 py-2 bg-light text-dark"
                                        style={{ background: 'rgba(255, 255, 255, 0.07)', marginBottom: 10 }}
                                    >
                                        <option>{translate('Areas')}</option>
                                        {areas?.map((type, index) => (
                                            <option key={index} value={type?.id}>
                                                {direction === 'rtl' ? type?.name_ar : type?.name_en}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Fade>
                            </Col>
                            <Col md={5} className='m-auto'>
                                <Fade direction="right" fraction={0.5} cascade delay={130}>
                                    <Form.Select
                                        onChange={(e) => {
                                            const selectedId = e.target.value;
                                            const selectedName = e.target.options[e.target.selectedIndex].text;
                                            setPropertyTypeId(selectedId);
                                            setPropertyTypeName(selectedName);
                                        }}
                                        className="border-0 rounded-2 px-4 py-2 bg-light text-dark"
                                        style={{ background: 'rgba(255, 255, 255, 0.07)' }}
                                    >
                                        <option>{translate('PropertyType')}</option>
                                        {propertyTypes?.map((item, index) => (
                                            <option key={index} value={item?.id}>
                                                {direction === 'rtl' ? item?.name_Ar : item?.name_En}
                                            </option>
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
                                    <Button variant="success" className='mobilebutton' onClick={(e) => handleSearch(e)}>
                                        {translate('Search')}
                                    </Button>
                                </Fade>
                            </Col>
                            <Col md={2} className='text-end m-auto'>
                                <Fade direction="right" fraction={0.5} cascade delay={150}>
                                    <Button variant="danger" className='mobilebutton px-3 btn btn-link text-danger' onClick={handleAdvanceShow}>{translate('Advance')}</Button>
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