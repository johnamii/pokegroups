import React, { useState } from 'react';
import Select, { components } from 'react-select'
import { pokemonOptions, starOptions, teraOptions} from './data'
import { Input } from '@chakra-ui/input'
import { AddIcon } from '@chakra-ui/icons'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './firestore'

export const AddButton = (props) => {

    return (
        <button className='add-button' onClick={props.hostClick}>
            <AddIcon boxSize={30}/>
        </button>
    )
}

export const HostBox = (props) => {

    //const [raidOpen, setRaidOpen] = useState(false);
    const [pokemonSelect, setPokemonSelect] = useState(null);
    const [starsSelect, setStarsSelect] = useState(null);
    const [teraTypeSelect, setTeraTypeSelect] = useState(null);
    const [linkCodeValue, setLinkCodeValue] = useState(null);
     const handleChange = (event) => setLinkCodeValue(event.target.value);
    const [stratsSelect, setStratsSelect] = useState(null);

    async function createListing () {
        if (pokemonSelect && starsSelect && teraTypeSelect && linkCodeValue) {
            console.log("Creating listing of: " + pokemonSelect.label + ', ' + starsSelect.value + ' stars');

            const docRef = await addDoc(collection(db, "raids"), {
                host: 'John',
                pokemon: pokemonSelect.label,
                stars: starsSelect.value,
                teraType: teraTypeSelect.label,
                linkCode: linkCodeValue,
                postedAt: Date.now()
            })
            .then(() => {
                clearFields();
                console.log("Successfully created new raid.");
            })
        }
        else{
            console.log("Did not create listing. Fill Required fields");
            return;
        }
    }

    function clearFields() {
        console.log('Clearing fields.');
        setPokemonSelect(null);
        setStarsSelect(null);
        setStarsSelect(null);
        setTeraTypeSelect(null);
        setLinkCodeValue(null);
        setStratsSelect(null);
    }

    const selectStyle = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            background: '#F0F0F0',
            borderRadius: '10px',
            borderColor: state.isFocused ? '#CE3838' : 'grey',
            
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            color:'black'
        }),
    }

    const { Option } = components;
    const IconOption = props => {

        const monName = props.data.label.toLowerCase().replace(/\s/g , "-")

        return (
            <Option {...props}>
                <img
                src={'https://img.pokemondb.net/sprites/scarlet-violet/normal/' + monName + '.png'}
                style={{ width: 50 }}
                alt={props.data.label}
                />
                {props.data.label}
            </Option>
        )
        
    };

    return ( 
        <div className='host-box'>
            <button className='host-x-button' onClick={props.hostClick}>x</button>
            
            <div className='host-box-section'>
                <h2>Raid Info</h2>
                <div className='host-box-input'>
                    <h4>Pokemon *</h4>
                    <Select
                    name='pokemon'
                    options={pokemonOptions}
                    components={{ Option: IconOption }}
                    styles={selectStyle}
                    onChange={(value) => setPokemonSelect(value)}
                    />
                </div>
                
                <div className='host-box-input'>
                    <h4>Stars *</h4>
                    <Select
                    
                    name='stars'
                    options={starOptions}
                    styles={selectStyle}
                    onChange={(value) => setStarsSelect(value.label)}
                    />
                </div>
                
                <div className='host-box-input'>
                    <h4>Tera Type *</h4>
                    <Select
                    name='tera-type'
                    options={teraOptions}
                    styles={selectStyle}
                    onChange={(value) => setTeraTypeSelect(value)}
                    />
                </div>
            </div>

            <div className='host-box-section'>
                <h2>Team Info</h2>
                <div className='host-box-input'>
                    <h4>Link Code *</h4>
                    <Input  
                    onChange={handleChange} 
                    className='link-code-bar'
                    />
                </div>
                
                <div>
                    <button 
                     className='host-post-button'
                     onClick={() => {clearFields()}}
                    >
                        Clear
                    </button>
                    <button 
                     className='host-post-button'
                     onClick={() => {createListing()}}
                    >
                        Post
                    </button>
                </div>
            </div>   
        </div>
    )
}