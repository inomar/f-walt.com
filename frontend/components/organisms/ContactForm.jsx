import styled from 'styled-components';

import FormContent from '../molecules/FormContent';
import { ButtonSubmit } from '../atoms/Button';
export default () => {
  return (
    <FormContainer >
      <form action="https://form.run/api/v1/r/7t5zo1bnt3ezjrr9shvrvrgw" method="post">
        <FormContent label="name" inputType="text" required={true} />
        <FormContent label="email" inputType="email" formType="email" required={true} />
        <FormContent label="content" inputType="textarea" required={true} />
        <FormrunGotocha>
          <label for="_formrun_gotcha">If you are a human, ignore this field</label>
          <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex="-1" />
        </FormrunGotocha>
        <ButtonSubmit type="submit" title="Send" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." />
      </form>
    </FormContainer>
  )
}

const FormrunGotocha = styled.div`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
`;

const FormContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;