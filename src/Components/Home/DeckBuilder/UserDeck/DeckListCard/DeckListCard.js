import React from 'react'

export default function DeckListCard(props) {
    return (
        <div className='decklist-card'>
                <img alt='' src={props.imageCard} />
                <button onClick={()=> props.updateDeckCard(props.id)} >Update</button>
                <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>
                {/* <img alt='' src={card.imageUrl} />
                <button onClick={()=> props.updateDeckCardProps(card.id)} >Update</button>
                <button className='delete' onClick={()=> props.deleteDeckCardProps(card.id)} >X</button> */}
        </div>
    )
}