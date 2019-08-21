import { TwitterShareButton, FacebookShareButton } from 'react-share';

import { TwitterScreenName } from '../../config/constantes';

export const TwitterShareBtn = ({ url, size, title }) => (
  <TwitterShareButton title={title} via={TwitterScreenName} url={url}>
    <i className={`fab fa-twitter ${size}`}></i>
  </TwitterShareButton>
);

export const FacebookShareBtn = ({ url, size }) => (
  <FacebookShareButton url={url}>
    <i className={`fab fa-facebook-square ${size}`}></i>
  </FacebookShareButton>
);
