import styled from 'styled-components';

const Icon = styled.a`
  font-size: 2rem;
  margin: 3px 10px 15px;
`;

const Twitter = styled(Icon)`
  color: #00aced;
`;

const Instagram = styled(Icon)`
  background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  svg * {
    fill: url(#rg);
  }
  &:hover {
      opacity: 0.8;
    }
`;

export const TwitterIcon = ({ url }) => (
  <Twitter className="icon has-text-info" href={url} target="_blank" >
    <i className="fab fa-twitter"></i>
  </Twitter>
);

export const InstagramIcon = ({ url }) => (
  <Instagram className="icon" href={url} target="_blank">
    <svg width="0" height="0">
      <radialGradient id="rg" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0" />
        <stop stopColor="#fdf497" offset="0.05" />
        <stop stopColor="#fd5949" offset="0.45" />
        <stop stopColor="#d6249f" offset="0.6" />
        <stop stopColor="#285AEB" offset="0.9" />
      </radialGradient>
    </svg>
    <i className="fab fa-instagram"></i>
  </Instagram>
);
