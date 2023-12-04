
import coverArtFWN from './assets/FWNcover.png'
import coverArt5AM from './assets/5AMcover.png'
import coverArtBrian from './assets/Briancover.png'
import coverArtSunGoesDown from './assets/SunGoesDowncover.png'
import coverArtWanaKnow from './assets/WanaKnowcover.png'

export default function Songs(props) {

    const songs = [{
        id: 1,
        coverArt: `${coverArtFWN}`,
        name: '505',
        releaseDate: '23-04-2007'
    },
    {
        id: 2,
        coverArt: `${coverArtBrian}`,
        name: 'Brianstorm',
        releaseDate: '02-04-2007'
    },
    {
        id: 3,
        coverArt: `${coverArtSunGoesDown}`,
        name: 'When The Sun Goes Down',
        releaseDate: '23-01-2006'
    },
    {
        id: 4,
        coverArt: `${coverArtFWN}`,
        name: 'Fluorescent Adolescent',
        releaseDate: '04-07-2007'
    },
    {
        id: 5,
        coverArt: `${coverArt5AM}`,
        name: "Why'd You Only Call Me When You're High?",
        releaseDate: '06-09-2013'
    },
    {
        id: 6,
        coverArt: `${coverArtWanaKnow}`,
        name: "Do I Wanna Know?",
        releaseDate: '18-06-2013'
    }]

    const listSongs = songs.map(song => <li key={song.id}>
        <img className="song-cover" src={song.coverArt} alt="Cover art for the song"/> &nbsp;
        {song.name}: &nbsp;
        {song.releaseDate}
        </li>)

    return (
        <ol>{listSongs}</ol>
    )
}
