const images = [
    {
        name: 'The Neighbourhoods - Afraid',
        url: 'images/afraid.jpg',
        song: 'songs/The Neighbourhoods - Afraid.mp3'
    },
    {
        name: 'Within Temptation - All I Need',
        url: 'images/all_i_need.jpg',
        song: 'songs/Within Temptation - All I Need.mp3'
    },
    {
        name: 'Cary Brothers - Belong',
        url: 'images/belong.jpg',
        song: 'songs/Cary Brothers - Belong.mp3'
    },
    {
        name: 'Sara Bareiles - Breath Again',
        url: 'images/breath_again.jpg',
        song: 'songs/Sara Bareiles - Breath Again.mp3'
    },
    {
        name: 'Hurts feat. Kylie Minogue - Devotion',
        url: 'images/devotion.jpg',
        song: 'songs/Hurts feat. Kylie Minogue - Devotion.mp3'
    },
    {
        name: 'Jason Walker - Down',
        url: 'images/down.jpg',
        song: 'songs/Jason Walker - Down.mp3'
    },
    {
        name: 'Ron Pope - A Drop in the Ocean',
        url: 'images/drop_in_the_ocean.jpg',
        song: 'songs/Ron Pope - A Drop in the Ocean.mp3'
    },
    {
        name: 'Jason Walker - Echo',
        url: 'images/echo.jpg',
        song: 'songs/Jason Walker - Echo.mp3'
    },
    {
        name: 'Blue Foundation - Eyes on Fire',
        url: 'images/eyes_on_fire.jpg',
        song: 'songs/Blue Foundation - Eyes on Fire.mp3'
    },
    {
        name: 'Lykke Li - Get Some',
        url: 'images/get_some.jpg',
        song: 'songs/Lykke Li - Get Some.mp3'
    },
    {
        name: 'Ed Sheeran - Give Me Love',
        url: 'images/give_me_love.jpg',
        song: 'songs/Ed Sheeran - Give Me Love.mp3'
    },
    {
        name: 'Civil Twilight - Human',
        url: 'images/human.jpg',
        song: 'songs/Civil Twilight - Human.mp3'
    },
    {
        name: 'Sleeperstar - I Was Wrong',
        url: 'images/i_was_wrong.jpg',
        song: 'songs/Sleeperstar - I Was Wrong.mp3'
    },
    {
        name: 'Ed Sheeran - Kiss Me',
        url: 'images/kiss_me.jpg',
        song: 'songs/Ed Sheeran - Kiss Me.mp3'
    },
    {
        name: 'Florence and The Machine - Never Let Me Go',
        url: 'images/never_let_me_go.jpg',
        song: 'songs/Florence and the Machine - Never Let Me Go.mp3'
    },
    {
        name: 'Ume - Run Wild',
        url: 'images/run_wild.jpg',
        song: 'songs/Ume - Run Wild.mp3'
    },
    {
        name: 'Birdy - Skinny Love',
        url: 'images/skinny_love.jpg',
        song: 'songs/Birdy - Skinny Love.mp3'
    },
    {
        name: 'Birdy - Wings',
        url: 'images/wings.jpg',
        song: 'songs/Birdy - Wings.mp3'
    }
]

let a = 0;

document.querySelector('.song__wrp').addEventListener('click', function () {
    document.querySelector('.song__start').remove();
    document.querySelector('.song__wrp').style.backgroundColor = '#232323';
    let preload = setInterval(() => {
        if (a < images.length * 2) {
            if (document.querySelector('.song__img')) {
                document.querySelector('.song__img').remove();
            }
            randomSongNumber = Math.floor(Math.random() * (images.length));
            document.querySelector('.song__wrp').style.backgroundImage = `url(${images[randomSongNumber].url})`;

            a++;
        } else {
            document.querySelector('.song__name').innerHTML = `${images[randomSongNumber].name}`;
            let audio = new Audio(`${images[randomSongNumber].song}`);
            audio.autoplay = true;
            clearInterval(preload);
        }
    }, 100);
})
