import SpotifyPlayer from 'react-spotify-player';

export const AppleMusicPlayer = () => {
  return (
    <iframe 
      allow="autoplay *; encrypted-media *;"
      style={{ width:'100%', overflow: 'hidden', background: 'transparent'}}
      frameBorder="0"
      src="https://embed.music.apple.com/jp/album/injured/1455047732?i=1455048009"
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
    <SpotifyPlayer
      uri={uri}
      size={size}
      view="coverart"
      theme="black"
    />
  )
}