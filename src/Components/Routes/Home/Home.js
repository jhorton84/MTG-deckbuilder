import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='home-component'>
                <video 
                    autoplay='autoplay' muted='muted' data-video-loop-time='0' data-video-repeat-times='3' poster="https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf_0.jpg" loop='true'>
                    <source type='video/mp4' src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf 3.mp4'></source>
                    <source type='video/webm' src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf 2.webm'></source>
                    <img src='https://magic.wizards.com/sites/mtg/files/gV45RNA2sdf 0.jpg' alt />
                </video>
                <div className='welcome-container'>
                    <h1>Welcome to The Grimoire</h1>
                    <Link to='/Deckbuilder'><button>Start Building!</button></Link>
                    {/* <Link to='/Decks'><button onClick={()=>{this.saveDeckCards()}}>Save</button></Link> */}
                </div>
            </div>

        );
    }
}