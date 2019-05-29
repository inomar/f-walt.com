import Embed from 'react-instagram-embed';

const InstgramEmbed = () => (
  <Embed
    url='https://www.instagram.com/f_walt_jp/'
    hideCaption={false}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
);

export default InstgramEmbed;