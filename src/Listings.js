import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2'
import { isMobile } from 'react-device-detect';

export const RaidListing = (props) => {

    const monName = props.data.pokemon.toLowerCase().replace(/\s/g , "-");
    const imgUrl = 'https://img.pokemondb.net/sprites/scarlet-violet/normal/' + monName + '.png';
    const dateSince = new Date(Date.now() - props.data.postedAt);

    const viewStyles = {
        width: isMobile ? '90%' : '50%'
    }

    return (
        <div className="listing-bubble" style={viewStyles}>
            <img src={imgUrl} alt={props.data.pokemon} style={{height: '100%'}}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <b>{props.data.pokemon}</b>
                <p>Tera {props.data.teraType}</p>
                <b>{props.data.stars} ★</b>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Link Code:</p>
                <h2 style={{margin:-10}}>{props.data.linkCode}</h2>
                {
                    dateSince.getMinutes() < 3 || dateSince.getDay() === 0
                    ?
                    <p>Posted <b>{dateSince.getMinutes()}m, {dateSince.getSeconds()}s</b> ago.</p>
                    :
                    <p><b>Expired</b></p>
                }
            </div>
        </div>
    )
}

export const TradeListing = (props) => {
    return (
        <div className="listing-bubble">
            hello
        </div>
    )
}

export const ListingMap = (props) => {

    function filterResults(listing) {
        let valid = true;
        if (props.monFilter){
            valid = ( listing.pokemon.toLowerCase().includes(props.monFilter.toLowerCase()));
        }
        if (props.starFilter){
            valid = listing.stars === props.starFilter.value;
        }
        if (props.teraFilter){
            valid = listing.teraType === props.teraFilter.label;
        }
        return valid;
    }

    return (
        <Scrollbars
         renderThumbVertical={() => <div style={{background:'#F0F0F0', borderRadius:'5px'}}/>}
        >
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                {
                    props.data.sort((a, b) => {
                        return b.postedAt - a.postedAt
                    }).filter(word => (
                        filterResults(word)
                    )).map((listing) => {
                        return <RaidListing data={listing} key={listing.postedAt}/>;
                    })
                }
            </div>
        </Scrollbars>      
    )
}