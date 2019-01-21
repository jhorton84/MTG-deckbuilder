import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='home-component'>
                <div className='home'>
                    <div className='home-title'>
                        <div className='lg-title'>
                            <h1>Welcome to The Grimoire: 
                                <h2>MTG Deckbuilder!</h2>
                            </h1>
                        </div>
                        <div>
                            <p>This site is a pet project to help newcomers and veterans with building decks for playing the Magic the Gathering TCG.</p>
                        </div>
                        
                    </div>
                    
                    <div className='deck-tips'>
                        <h3>Deck Building Tips:</h3>
                        <p>Magic: The Gathering has many different ways to play and playstyles to match a wide range of a diverse player community. Magic is categorized into 5 basic colors each with its own strengths. Understanding these strengths can help you build your deck as well as know what to look out for when competing against other players.</p>
                        <div className="color-description">
                            {/* <h2>Colors:</h2> */}
                            <div className='color-box-w'>
                                <div className='colors'>
                                    <h3>White:</h3>
                                    <p>White is about armies and defense. Gaining life and building up strong armies of angels and defending yourself from the attacks of your opponents is a common theme in white decks.</p>
                                </div>
                            </div>
                            <div className='color-box-u'>
                                <div className='colors'>
                                    <h3>Blue:</h3>
                                    <p>Blue is about knowledge and manipulation. This color is full of spells that keep your opponent from being able to cast spells and forces them to do what you want.</p>
                                </div>
                            </div>
                            <div className='color-box-b'>
                                <div className='colors'>
                                    <h3>Black:</h3>
                                    <p>Black is about death and sacrifice. Black decks specialize in casting spells that kill your opponents creatures outright or raise them from the dead. If you want to play as a powerful necromancer, black decks may be for you.</p>
                                </div>
                            </div>
                            <div className='color-box-r'>
                                <div className='colors'>
                                    <h3>Red:</h3>
                                    <p>Red decks are about fire and passion. These decks have spells that deal damage directly to your opponent regardless of the armies they posess. Burn your enemies and attack fast.</p>
                                </div>
                            </div>
                            <div className='color-box-g'>
                                <div className='colors'>
                                    <h3>Green:</h3>
                                    <p>Green is about nature and creatures. Command massive armies of elves or large behemoth creatures to fight for you. Green decks specialize in building an army quickly to attack your opponent on the battlefield. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card#'>
                            <h3>What to Put in Your Deck</h3>
                            <div className='tips-container'>
                                <p>In order to play Magic the Gathering you and an opponent will each need your own deck of 60 cards. MTG has many different kinds of cards that you can use to achieve multiple ways of defeating your opponents.</p>
                                <p>In order to play the game you will need to build up a pool of mana or "land" cards. A typical deck will consist of about 20-25 land cards. Too many and you may have lots of mana but no spells to cast. Too few and you risk getting "mana-burn", when you don't draw enough land cards during the game to cast your spells.</p>
                                <p>Decide what color or colors of magic you are going to play and then make sure you have an adequate amount of mana in your deck.</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}