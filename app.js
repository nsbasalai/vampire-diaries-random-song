const images = [
    {
        title: 'Afraid',
        artist: 'The Neighbourhoods',
        url: 'images/afraid.jpg',
        song: 'songs/The Neighbourhoods - Afraid.mp3',
        link: 'https://open.spotify.com/track/7brQHA2CgQpcMBiOlfiXYb?si=f36c38b4dae44284',
    },
    {
        title: 'All I Need',
        artist: 'Within Temptation',
        url: 'images/all_i_need.jpg',
        song: 'songs/Within Temptation - All I Need.mp3',
        link: 'https://open.spotify.com/track/02oW7CYWjfiCs1rZs7GNes?si=c9059ee268594621',
    },
    {
        title: 'Belong',
        artist: 'Cary Brothers',
        url: 'images/belong.jpg',
        song: 'songs/Cary Brothers - Belong.mp3',
        link: 'https://open.spotify.com/track/6ivkBaxvclVhwZDE2uwldj?si=dc2163bdc7c14043',
    },
    {
        title: 'Breath Again',
        artist: 'Sara Bareiles',
        url: 'images/breath_again.jpg',
        song: 'songs/Sara Bareiles - Breath Again.mp3',
        link: 'https://open.spotify.com/track/0UgmLwOrTeOCUNwV07a5AD?si=fb438f9784014343',
    },
    {
        title: 'Devotion',
        artist: 'Hurts feat. Kylie Minogue',
        url: 'images/devotion.jpg',
        song: 'songs/Hurts feat. Kylie Minogue - Devotion.mp3',
        link: 'https://open.spotify.com/track/5tBFh4FcGsz4pf2oPzor7v?si=93b5dae0453e43c0',
    },
    {
        title: 'Down',
        artist: 'Jason Walker',
        url: 'images/down.jpg',
        song: 'songs/Jason Walker - Down.mp3',
        link: 'https://open.spotify.com/track/7FWWMsKZyVZ70awxDXy47f?si=aa747729deca4d57',
    },
    {
        title: 'A Drop in the Ocean',
        artist: 'Ron Pope',
        url: 'images/drop_in_the_ocean.jpg',
        song: 'songs/Ron Pope - A Drop in the Ocean.mp3',
        link: 'https://open.spotify.com/track/5JDcQAztvZTIkrWoZihgvC?si=c0f102911c174737',
    },
    {
        title: 'Echo',
        artist: 'Jason Walker',
        url: 'images/echo.jpg',
        song: 'songs/Jason Walker - Echo.mp3',
        link: 'https://open.spotify.com/track/7v5s7YFXrwzytRan0HtZGb?si=12c2e8aa52914d91',
    },
    {
        title: 'Eyes on Fire',
        artist: 'Blue Foundation',
        url: 'images/eyes_on_fire.jpg',
        song: 'songs/Blue Foundation - Eyes on Fire.mp3',
        link: 'https://open.spotify.com/track/3XHrTm6WE2BOHafLwTT3GR?si=54959e28ad0140de',
    },
    {
        title: 'Get Some',
        artist: 'Lykke Li',
        url: 'images/get_some.jpg',
        song: 'songs/Lykke Li - Get Some.mp3',
        link: 'https://open.spotify.com/track/5LbCx9z3eq83JVoJ74tnmt?si=22b8bc4c684b41e1',
    },
    {
        title: 'Give Me Love',
        artist: 'Ed Sheeran',
        url: 'images/give_me_love.jpg',
        song: 'songs/Ed Sheeran - Give Me Love.mp3',
        link: 'https://open.spotify.com/track/0SuG9kyzGRpDqrCWtgD6Lq?si=ef3db11644694875',
    },
    {
        title: 'Human',
        artist: 'Civil Twilight',
        url: 'images/human.jpg',
        song: 'songs/Civil Twilight - Human.mp3',
        link: 'https://open.spotify.com/track/4fDXIANSPZ5TyyIeiTPbD9?si=16f8cfdeea3b4e17',
    },
    {
        title: 'I Was Wrong',
        artist: 'Sleeperstar',
        url: 'images/i_was_wrong.jpg',
        song: 'songs/Sleeperstar - I Was Wrong.mp3',
        link: 'https://open.spotify.com/track/45Tw2NZgCTA0CHwrkuakCj?si=6114227c51a44bb6',
    },
    {
        title: 'Kiss Me',
        artist: 'Ed Sheeran',
        url: 'images/kiss_me.jpg',
        song: 'songs/Ed Sheeran - Kiss Me.mp3',
        link: 'https://open.spotify.com/track/0Tel1fmuCxEFV6wBLXsEdk?si=9062a91079724423',
    },
    {
        title: 'Never Let Me Go',
        artist: 'Florence and The Machine',
        url: 'images/never_let_me_go.jpg',
        song: 'songs/Florence and The Machine - Never Let Me Go.mp3',
        link: 'https://open.spotify.com/track/3HNTLCpAGnizbyJmk7466r?si=fa02ce6dd49f442b',
    },
    {
        title: 'Run Wild',
        artist: 'Ume',
        url: 'images/run_wild.jpg',
        song: 'songs/Ume - Run Wild.mp3',
        link: '',
    },
    {
        title: 'Skinny Love',
        artist: 'Birdy',
        url: 'images/skinny_love.jpg',
        song: 'songs/Birdy - Skinny Love.mp3',
        link: 'https://open.spotify.com/track/4RL77hMWUq35NYnPLXBpih?si=5db0171fec83484e',
    },
    {
        title: 'Wings',
        artist: 'Birdy',
        url: 'images/wings.jpg',
        song: 'songs/Birdy - Wings.mp3',
        link: 'https://open.spotify.com/track/2Kz5qeXifBxE0zmuoVchlM?si=ee410ef0c3de4a6b',
    }
]

let a = 0;

// document.querySelector('.song__wrp').addEventListener('click', function () {
//     let result;
//     document.querySelector('.song__start').remove();
//     document.querySelector('.song__wrp').style.backgroundColor = '#232323';
//     for (a = 0; a < images.length; a++) {
//         let iter = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (document.querySelector('.song__img')) {
//                     document.querySelector('.song__img').remove();
//                 }
//                 randomSongNumber = Math.floor(Math.random() * (images.length));
//                 document.querySelector('.song__wrp').style.backgroundImage = `url(${images[randomSongNumber].url})`;
//                 resolve(randomSongNumber);
//             }, 1000);
//         })
//         result = iter.then((randomSongNumber) => { return randomSongNumber });
//         console.log(result);
//     }
//     let audio = new Audio(`${images[randomSongNumber].song}`);
//     audio.muted = false;
//     audio.play();
// })

const button = document.querySelector('.song__start');
const wrapper = document.querySelector('.song__wrp');
const songImage = document.querySelector('.song__img');
const songName = document.querySelector('.song__name');
const songArtist = document.querySelector('.song__artist');
const container = document.querySelector('.container');

button.addEventListener('click', function () {
    button.remove();
    wrapper.style.backgroundColor = '#232323';
    let preload = setInterval(() => {
        if (a < images.length) {
            if (songImage) {
                songImage.remove();
            }
            randomSongNumber = Math.floor(Math.random() * (images.length));
            wrapper.style.backgroundImage = `url(${images[randomSongNumber].url})`;

            a++;
        } else {
            clearInterval(preload);
            wrapper.style.boxShadow = '0 0 5px 5px rgb(23, 23, 23)';
            songName.innerHTML = `${images[randomSongNumber].title}`;
            songArtist.innerHTML = `${images[randomSongNumber].artist}`;
            container.insertAdjacentHTML('beforeend', `
            <a class='song__link' href=${images[randomSongNumber].link} target='_blank'><img class='song__spotify' src='images/spotify.png' alt="Прослушать песню в спотифай"></a>
            `)
            let audio = new Audio(`${images[randomSongNumber].song}`);
            audio.play();
        }
    }, 150);
})