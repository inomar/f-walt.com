import SpotifyPlayer from 'react-spotify-player';

export const AppleMusicPlayer = () => {
  return (
    <iframe 
      allow="autoplay *; encrypted-media *;"
      style={{ width:'100%', overflow: 'hidden', background: 'transparent', height: '450px'}}
      frameBorder="0"
      height="450"
      src="https://embed.music.apple.com/jp/album/spell-single/1480098277"
    >
    </iframe>
  )
}

export const SpotifyMusicPlayer = ({ uri }) => {
  const size = {
    width: '100%',
    height: 300,
  };
  return (
    <iframe src="https://open.spotify.com/embed/album/7yz8mF5cv64t4DhkVxysUa"
      width="100%"
      height="100%"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
  )
}