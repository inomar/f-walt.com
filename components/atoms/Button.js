import styled from 'styled-components';

const Button = ({title}) => {
  return (
    <button type="button" className="button is-outlined is-inverted">
      {title}
    </button>
  )
}

export default Button;
