<!-- code for rendering the images if card has multiple faces will render the first side -->
{card.image_uris.small ? card.image_uris.small : card.card_faces[0].image_uris.small}


look into the hasOwnProperty method and the Find method to understand how they work. Used in the map to display cards.

code for doing a search for cards that are only black where the text includes the word 'destroy' and the type is sorcery.
    Color: black
    Type: sorcery
    Text: destroy

    https://scryfall.com/cards/search?as=grid&order=name&q=oracle%3Adestroy+type%3Asorcery+color%3DB


    old version
    conditional for the search:

    // searchCards = () => {
    //     console.log('searchCards', this.props.searchName)
    //     console.log('cardType', this.props.cardType)
    //     console.log('searchText', this.props.searchText)
    //     console.log('colors', this.state.colorWhite, this.state.colorBlue, this.state.colorBlack, this.state.colorRed, this.state.colorGreen)
        
    //     //searches when just searchName is present
    //     if(this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search/?q=${this.props.searchName}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches when just searchText is present
    //     }else if(this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches by resetting to fetch all cards in the initialCards
    //     }else if(this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         this.getInitialCards();
        

    //     //searches for just white cards
    //     }else if(this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for just blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for just black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for just Red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for just green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white and blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white and black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white and red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white and green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches for blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches for black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches for white/black/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/red/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/black/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/black/red/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for blue/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for white/blue/red/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
    //     //searches for cardType only
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardtype !== '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for name and cardType only
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType !== '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType !== '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for name/text only
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches for text/cardType only
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType !== '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and white cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and blue cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and Red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/blue cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and White/black/red
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/black/green
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/black/red
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and blue/black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name and white/blue/black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and blue/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name and white/blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text and blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and Red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and White/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/black/green
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text and blue/black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text and blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text and black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text and white/blue/black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and blue/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text and white/blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
        
    //     //searches name/text and white cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text and blue cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and Red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/blue cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and White/black/red
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/black/green
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/black/red
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text and blue/black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text and blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text and black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text and white/blue/black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and blue/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text and white/blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType === '' && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
        
    //     //searches text/cardType and white cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text/cardType and blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and Red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and White/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/black/green
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text/cardType and blue/black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text/cardType and blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text/cardType and black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches text/cardType and white/blue/black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and blue/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches text/cardType and white/blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
        
    //     //searches name/cardType and white cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/cardType and blue cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and Red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/blue cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and White/black/red
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/black/green
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/black/red
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/cardType and blue/black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/cardType and blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/cardType and black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/cardType and white/blue/black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and blue/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/cardType and white/blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+type%3A${this.props.cardType}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
        
    //     //searches cardType and white cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches cardType and blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and Red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/blue cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/blue/black cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/blue/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/blue/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and White/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/black/green
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/black/red
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches cardType and blue/black/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches cardType and blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches cardType and black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches cardType and white/blue/black/red cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and blue/black/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches cardType and white/blue/red/green cards
    //     }else if (this.props.searchName === '' && this.props.searchText === '' && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=type%3A${this.props.cardType}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
        
    //     //searches name/text/cardType and white cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DW`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType and blue cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and Red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/blue cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWU`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/blue/black cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/blue/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/blue/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and White/black/red
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/black/green
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/black/red
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === '') {
    //         axios.get(`https://api.scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUB`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType and blue/black/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === '' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUBG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType and blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType and black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })

    //     //searches name/text/cardType and white/blue/black/red cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === '') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWUBR`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === '' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and blue/black/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === '' && this.state.colorBlue === 'U' && this.state.colorBlack === 'B' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DUBRG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
        
    //     //searches name/text/cardType and white/blue/red/green cards
    //     }else if (this.props.searchName.length && this.props.searchText.length && this.props.cardType.length && this.state.colorWhite === 'W' && this.state.colorBlue === 'U' && this.state.colorBlack === '' && this.state.colorRed === 'R' && this.state.colorGreen === 'G') {
    //         axios.get(`https://api/scryfall.com/cards/search?as=grid&order=name&q=${this.props.searchName}+oracle%3A${this.props.searchText}+type%3A${this.props.cardType}+color%3DWURG`).then(response => {
    //             this.props.updateCards(response.data.data)
    //         })
    //     }
    // }

