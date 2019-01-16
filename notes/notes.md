<!-- code for rendering the images if card has multiple faces will render the first side -->
{card.image_uris.small ? card.image_uris.small : card.card_faces[0].image_uris.small}


look into the hasOwnProperty method and the Find method to understand how they work. Used in the map to display cards.

code for doing a search for cards that are only black where the text includes the word 'destroy' and the type is sorcery.
    Color: black
    Type: sorcery
    Text: destroy

    https://scryfall.com/cards/search?as=grid&order=name&q=oracle%3Adestroy+type%3Asorcery+color%3DB



    conditional for the search:

    searchCards = () => {
        console.log('searchCards', this.props.searchName)
        console.log('cardType', this.props.cardType)
        // axios.get(`https://api.scryfall.com/cards/search/?q=${this.props.searchName}`).then(response => {
        
        axios.get(`https://api.scryfall.com/cards/search/?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3D${this.colorWhite}`).then(response => {
            this.setState({
                cards: response.data.data
            })
        })
        
    }