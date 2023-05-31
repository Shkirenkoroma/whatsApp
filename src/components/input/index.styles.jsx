import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border:none;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px;
  outline: ${(props) => (props.error ? '1px solid red' : 'none')};
  
  ::placeholder{
  font-family: 'Kaushan Script', cursive;
}
`;
