import SpotifyPlayer from 'react-spotify-player';

export const AppleMusicPlayer = () => {
  return (
    <iframe 
      allow="autoplay *; encrypted-media *;"
      style={{ width:'100%', overflow: 'hidden', background: 'transparent'}}
      frameborder="0"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
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
      view="list"
      theme="black"
    />
  )
}