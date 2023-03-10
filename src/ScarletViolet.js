import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { ListingMap } from './Listings.js'
import {HostBox, AddButton} from './HostBox.js';
import {Input} from '@chakra-ui/input'
import {RepeatIcon, EditIcon, ChevronUpIcon, ChevronDownIcon} from '@chakra-ui/icons'
import {starOptions, teraOptions, EstablishedLinkTable } from './data'
import Select from 'react-select'
import { db } from './firestore'
import { isMobile } from 'react-device-detect';
import './index.css';

// TODO: 
    // ACCOUNT CREATION
        // users may only post if logged in
    // FIX PERMISSIONS / FIRESTORE RULES
    // AUTO EXPIRE LISTINGS
    // CLEARFIELDS FUNCTION
    // GET TERA RAID ICONS
    // UX BUTTON CLICKING AND FLOW
    // GET SEARCH FILTERS WORKING TOGETHER

const FilterBox = (props) => {

    return (
        <div className='filter-box'>
            <h3 style={{color:'#F0F0F0'}}>Stars: </h3>
            <Select
            name='stars'
            options={starOptions}
            onChange={(val) => props.changeStars(val)}
            isClearable
            />
            <h3 style={{color:'#F0F0F0'}}>Tera Type: </h3>
            <Select
            name='teraType'
            options={teraOptions}
            onChange={(val) => props.changeTera(val)}
            isClearable
            />
        </div>
    )
}

const ScarletViolet = () => {

    const [activeTab, setActiveTab] = useState("Raid");
    const [hosting, setHosting] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (event) => setSearchValue(event.target.value);
    const [starFilter, setStarFilter] = useState(null);
    const [teraFilter, setTeraFilter] = useState(null);
    const [filterBox, setFilterBox] = useState(false);
    const [estLinkBox, setEstLinkBox] = useState(false);
    const [data, setData] = useState([]);

    function fetchListings(){
        console.log('Refreshing Listings.');

        if (activeTab === "Raid"){
            getDocs(collection(db, "raids")).then(snapshot => {
                setData(snapshot.docs.map(doc => doc.data()));
            })
        }
        else if (69 === 1){

        }
        else {
            setData([]);
        }
    }

    useEffect(() => {
        fetchListings();
    }, [activeTab]);

    const styleWidth = {
        width: isMobile ? '90vw' : '50vw'
    }

    const ActivityTab = (props) => {
        const [hovered, setHovered] = useState(false);

        const tabStyles = {
            borderBottom: activeTab === props.name ? '3px solid #F0F0F0' : 'none',
            color: activeTab === props.name ? '#F0F0F0' : 'none',
            background: hovered ? 'rgb(100, 100, 100, .5)' : 'none'
        }
        
        return (
            <button 
             className='activity-tab' 
             onClick={() => {setActiveTab(props.name)}}
             style={tabStyles}
             onMouseOver={() => setHovered(true)}
             onMouseLeave={() => {setHovered(false)}}
            >
                {props.name}
            </button>
        )
    }

    return (
        <div className='app-body'>
            <div className="banner-container" style={{width: isMobile ? '90%' : '50%'}}>
                <img 
                 src="/sv-banner.png" 
                 alt="Pokemon Scarlet and Violet"
                 style={{width:'97%', borderRadius:'1em'}}
                />
            </div>

            <div className='default-link-codes' onClick={() => setEstLinkBox(!estLinkBox)} style={styleWidth}>
                <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%'}}>
                    {estLinkBox ? <ChevronUpIcon boxSize={30}/> : <ChevronDownIcon boxSize={30}/>}
                    <h3>Established Link Codes</h3>
                    {estLinkBox ? <ChevronUpIcon boxSize={30}/> : <ChevronDownIcon boxSize={30}/>}
                </div>
                {
                    estLinkBox && <EstablishedLinkTable/>
                }
            </div>

            <div className='activity-box' style={styleWidth}>
                <h3>Shared Link Codes</h3>

                <div className='activity-selector'>
                    <ActivityTab name='Raid'/>
                    <ActivityTab name='Battle'/>
                    <ActivityTab name='Trade'/>
                    <ActivityTab name='Union Circle'/>
                </div>

                <div >
                    <div className='activity-search-div'>
                        <Input
                        placeholder='Pokemon...'
                        fontSize="1.5em"
                        className='input-search-bar'
                        onChange={handleChange}
                        />
                        <div className='activity-search-button' onClick={() => fetchListings}><RepeatIcon/></div>
                        <div className='activity-search-button' onClick={() => setFilterBox(!filterBox)}><EditIcon/></div>
                    </div>
                    { 
                        filterBox && 
                        <FilterBox 
                        changeStars={(val) => setStarFilter(val)} 
                        changeTera={(val) => setTeraFilter(val)}
                        /> 
                    }
                </div>

                <div className='selected-listings'>
                    <ListingMap 
                     data={data}
                     monFilter={searchValue}
                     starFilter={starFilter}
                     teraFilter={teraFilter}
                    />
                </div>
                
            </div>

            { hosting ? <HostBox hostClick={() => setHosting(false)}/> : <AddButton hostClick={() => setHosting(true)}/> }

        </div>
    )
}
export default ScarletViolet;