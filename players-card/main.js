const teamName = document.getElementById('team')
const typeOfSport = document.getElementById('sport')
const worldCupYear = document.getElementById('year')
const headCoach = document.getElementById('head-coach')

const playerCards = document.getElementById('player-cards')
const playerDropdownList = document.getElementById('players')

const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
            img: 'asset/serio-almiron.jpg',
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
            img: 'asset/sergio-batista.jpg',
        },
        {
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
            img: 'asset/ricardo-bochini.jpg',
        },
        {
            name: "Claudio Borghi",
            position: "midfielder",
            number: 4,
            isCaptain: false,
            nickname: "Bichi",
            img: 'asset/claudio-borghi.jpg',
        },
        {
            name: "José Luis Brown",
            position: "defender",
            number: 5,
            isCaptain: false,
            nickname: "Tata",
            img: `asset/jose-luis-brown.jpg`
        },
        {
            name: "Daniel Passarella",
            position: "defender",
            number: 6,
            isCaptain: false,
            nickname: "El Gran Capitán",
            img: `asset/daniel-passarella.jpg`
        },
        {
            name: "Jorge Burruchaga",
            position: "forward",
            number: 7,
            isCaptain: false,
            nickname: "Burru",
            img: `asset/jorge-burruchaga.jpg`
        },
        {
            name: "Néstor Clausen",
            position: "defender",
            number: 8,
            isCaptain: false,
            nickname: null,
            img: `asset/nestor-clausen.jpg`
        },
        {
            name: "José Luis Cuciuffo",
            position: "defender",
            number: 9,
            isCaptain: false,
            nickname: "El Cuchu",
            img: `asset/jose-luis-cuciuffo.jpg`
        },
        {
            name: "Diego Maradona",
            position: "midfielder",
            number: 10,
            isCaptain: true,
            nickname: "El Pibe de Oro",
            img: `asset/diego-maradona.jpg`
        },
        {
            name: "Jorge Valdano",
            position: "forward",
            number: 11,
            isCaptain: false,
            nickname: "The Philosopher of Football",
            img: `asset/jorge-valdano.jpg`
        },
        {
            name: "Héctor Enrique",
            position: "midfielder",
            number: 12,
            isCaptain: false,
            nickname: null,
            img: `asset/hector-enrique.jpg`
        },
        {
            name: "Oscar Garré",
            position: "defender",
            number: 13,
            isCaptain: false,
            nickname: null,
            img: `asset/oscar-garre.jpg`
        },
        {
            name: "Ricardo Giusti",
            position: "midfielder",
            number: 14,
            isCaptain: false,
            nickname: null,
            img: `asset/ricardo-giusti.jpg`
        },
        {
            name: "Luis Islas",
            position: "goalkeeper",
            number: 15,
            isCaptain: false,
            nickname: "El loco",
            img: "asset/luis-islas.jpg"
        },
        {
            name: "Julio Olarticoechea",
            position: "defender",
            number: 16,
            isCaptain: false,
            nickname: null,
            img: `asset/julio-olarticoechea.jpg`
        },
        {
            name: "Pedro Pasculli",
            position: "forward",
            number: 17,
            isCaptain: false,
            nickname: null,
            img: `asset/pedro-pasculli.jpg`
        },
        {
            name: "Nery Pumpido",
            position: "goalkeeper",
            number: 18,
            isCaptain: false,
            nickname: null,
            img: `asset/nery-pumpido.jpg`
        },
        {
            name: "Oscar Ruggeri",
            position: "defender",
            number: 19,
            isCaptain: false,
            nickname: "El Cabezón",
            img: `asset/oscar-ruggeri.jpg`
        },
        {
            name: "Carlos Tapia",
            position: "midfielder",
            number: 20,
            isCaptain: false,
            nickname: null,
            img: `asset/carlos-tapia.jpg`
        },
        {
            name: "Marcelo Trobbiani",
            position: "midfielder",
            number: 21,
            isCaptain: false,
            nickname: "Calesita",
            img: `asset/marcelo-trobbiani.jpg`
        },
        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            number: 22,
            isCaptain: false,
            nickname: null,
            img: `asset/hector-zelada.jpg`
        },
    ],
};

Object.freeze(myFavoriteFootballTeam)
const { sport, team, players, year } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

teamName.textContent = team;
typeOfSport.textContent = sport;
worldCupYear.textContent = year
headCoach.textContent = coachName

window.addEventListener('DOMContentLoaded', () => setPlayerCards())

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map(({ name, position, number, isCaptain, nickname, img }) =>
        `
      <div class="card">
          <div class="img-container"><img src='${img === undefined ? 'https://placehold.co/100x150?text=Image&font=roboto' : img}' alt="" /></div>
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      
      `
    ).join('')
}

playerDropdownList.addEventListener('change', (e) => {
    playerCards.innerHTML = ''
    switch (e.target.value) {
        case 'nickname':
            setPlayerCards(players.filter((player) => player.nickname !== null))
            break;
        case 'forward':
            setPlayerCards(players.filter((player) => player.position === 'forward'))
            break;
        case 'midfielder':
            setPlayerCards(players.filter((player) => player.position === 'midfielder'))
            break;
        case 'defender':
            setPlayerCards(players.filter((player) => player.position === 'defender'))
            break;
        case 'goalkeeper':
            setPlayerCards(players.filter((player) => player.position === 'goalkeeper'))
            break;
        default:
            setPlayerCards();
    }
})