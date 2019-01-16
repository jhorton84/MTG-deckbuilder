import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDeckImage } from '../../ducks/reducer';
import { withRouter } from 'react-router'; 

function CreateDeckImage(props) {
    return (
        <div className='CreateDeck-component'>
            <div>
                <h1>Choose an Image</h1>
            </div>
            <div className='DeckImages'>
                <label for='r1' className='deckImages-background'>
                    <input type='radio' id='r1' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://i.pinimg.com/originals/69/eb/c9/69ebc9cf3ca8d87da41f239f7b1a1bdf.jpg')} alt='Gideon' src={'https://i.pinimg.com/originals/69/eb/c9/69ebc9cf3ca8d87da41f239f7b1a1bdf.jpg'} />
                    </div>
                </label>

                <label for='r2' className='deckImages-background'>
                    <input type='radio' id='r2' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://i.pinimg.com/originals/f5/e6/dc/f5e6dcf3194d10d1e76c8b8f9efb4c4a.jpg')} alt='Jace' src={'https://i.pinimg.com/originals/f5/e6/dc/f5e6dcf3194d10d1e76c8b8f9efb4c4a.jpg'} />
                    </div>
                </label>
                
                <label for='r3' className='deckImages-background'>
                    <input type='radio' id='r3' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://i.pinimg.com/originals/e9/f9/ce/e9f9ce39955314baa84396b44fc1b297.jpg')} alt='Liliana' src={'https://i.pinimg.com/originals/e9/f9/ce/e9f9ce39955314baa84396b44fc1b297.jpg'} />
                    </div>
                </label>

                <label for='r4' className='deckImages-background'>
                    <input type='radio' id='r4' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://i.pinimg.com/736x/f0/08/e2/f008e2e8cb7f91d04ee6e1311b4ba2cb--fire-magic-story-inspiration.jpg')} alt='Chandra' src={'https://i.pinimg.com/736x/f0/08/e2/f008e2e8cb7f91d04ee6e1311b4ba2cb--fire-magic-story-inspiration.jpg'} />
                    </div>
                </label>
                

                <label for='r5' className='deckImages-background'>
                    <input type='radio' id='r5' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://cdn0.artstation.com/p/assets/images/images/001/137/352/large/wesley-burt-planesnissa-wesleyburt.jpg?1440809481')} alt='Nissa' src={'https://cdn0.artstation.com/p/assets/images/images/001/137/352/large/wesley-burt-planesnissa-wesleyburt.jpg?1440809481'} />
                    </div>
                </label>
                
                <label for='r6' className='deckImages-background'>
                    <input type='radio' id='r6' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('https://cdna.artstation.com/p/assets/images/images/003/053/550/large/bastien-lecouffe-deharme-avacyn-final-web.jpg?1469042378')} alt='Avacyn' src={'https://cdna.artstation.com/p/assets/images/images/003/053/550/large/bastien-lecouffe-deharme-avacyn-final-web.jpg?1469042378'} />
                    </div>
                </label>
                
                <label for='r7' className='deckImages-background'>
                    <input type='radio' id='r7' name='radio' />
                    <div className='DeckImages-crop'>
                        <img active='selected' className='selectedImg' onClick={()=>props.updateDeckImage('http://www.komarckart.com/new_03.jpg')} alt='Sorin' src={'http://www.komarckart.com/new_03.jpg'} />
                    </div>
                </label>
            </div>
            <div className='createDeck-button'>
                <Link to='/createDeck/name'><button>Next</button></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deckImage: state.deckImage,
        
    }
}

const mapDispatchToProps = {
    updateDeckImage: updateDeckImage,
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDeckImage));