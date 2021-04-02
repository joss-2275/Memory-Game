document.addEventListener('DOMContentLoaded', () => {

    //memory card images
    const cardArray = [
        {
            name: 'A',
            img: 'assets/img/A.jpg'
        },
        {
            name: 'A',
            img: 'assets/img/A.jpg'
        },
        {
            name: 'B',
            img: 'assets/img/B.jpg'
        },
        {
            name: 'B',
            img: 'assets/img/B.jpg'
        },
        {
            name: 'C',
            img: 'assets/img/C.jpg'
        },
        {
            name: 'C',
            img: 'assets/img/C.jpg'
        },
        {
            name: 'D',
            img: 'assets/img/D.jpg'
        },
        {
            name: 'D',
            img: 'assets/img/D.jpg'
        },
        {
            name: 'E',
            img: 'assets/img/E.jpg'
        },
        {
            name: 'E',
            img: 'assets/img/E.jpg'
        },
        {
            name: 'F',
            img: 'assets/img/F.jpg'
        },
        {
            name: 'F',
            img: 'assets/img/F.jpg'
        },
        {
            name: 'G',
            img: 'assets/img/G.jpg'
        },
        {
            name: 'G',
            img: 'assets/img/G.jpg'
        },
        {
            name: 'H',
            img: 'assets/img/H.jpg'
        },
        {
            name: 'H',
            img: 'assets/img/H.jpg'
        },
    ]

// the board
const grid = document.querySelector('.grid')
var cardsChosen = []
function createBoard() {
    for (let i = 0; < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/img/blank.png')
        card.setAttribute('data-id', i)
       // card.addEventListener('click', flipcard)
       grid.appendChild(card)
    }
}

//check cards
function checkForMatch() {
    var cards = docutment.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('MATCHED')
    }
}

//flip cards
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId.img])
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()






})