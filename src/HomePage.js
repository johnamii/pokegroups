import React from 'react';
import { isMobile } from 'react-device-detect'
import './index.css';


// TODO: 
//figure out firebase authentication for development / useres
    // how does this relate to github repo?
//import pokeAPI, learn difference between browser/server
//decide when to push to github and whether it can be public or not

export const HomePage = () => {
  
    return (
        <div className='app-body'>
            <h1>Welcome to PokeGroups!</h1>
            <h3>A hub to collaborate on Pokemon Games</h3>
            <div style={{width: isMobile ? '90%' : '50%', textAlign:'center'}}>
                <p>
                    To get started, open the 
                    <a href="/sv" > Scarlet / Violet </a> tab and start joining raids.
                    <br/>
                    <br/>
                    This website is a work in progress.
                    More coming soon!
                </p>
            </div>
            
            
        </div>
    )
}
  
export const PokemonGO = () => {

    return (
        <div className='app-body'>
        <h1>Pokemon GO</h1>
        <br/>
        <br/>
        <p>Coming soon...</p>
        </div>
    )
}

export const Community = () => {

    return (
        <div className='app-body'>
        <h1>Community</h1>
        <br/>
        <br/>
        <p>Coming soon...</p>
        </div>
    )
}
  
export const About = () => {

    return (
        <div className="app-body">
            <h1>About</h1>
            <div style={{width:'70%', fontSize:'120%'}}>
                <p>
                    Hi, I'm John. I made this website because I've been been loving Pokemon Scarlet and Violet,
                    but I've found frustration with finding and joining raids online. It's very inconsistent
                    and it's hard to rely on random people it pairs you with. I hope this website can make that better
                    by connecting players who want a more efficient path to playing the game.
                    <br/><br/>
                    I also figured it might be a good resource if people are interested in joining
                    others for trades and even battles. Also, my experience with Pokemon GO tells me 
                    it might be useful to add fellow players' friend codes for legendary raids on that game as well.
                    <br/><br/>
                    I made this during a break between terms at university, so I'm not sure how much I'll be available
                    to keep developing. If you are know JavaScript/React and are interested in this project, check out the
                    contribute page in the top left! 
                </p>
            </div>
            
        </div>
    )
}

export const Account = () => {

    return (
        <div className="app-body">
            <h1>Account</h1>
            <br/>
            <br/>
            <p>Coming soon...</p>
        </div>
    )
}

export const Contribute = () => {

    return (
        <div className="app-body">
            <h1>Contribute</h1>
            <div style={{width:'50%', fontSize:'120%'}}>
                <p>
                    Are you passionate about this project? Checkout the <a href='https://github.com/johnamii/pokegroups'>GitHub respository</a> and consider
                    adding features or improving the style.
                    <br/><br/>
                    
                </p>
            </div>
        </div>
    )
}