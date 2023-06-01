import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border:none;
  border-bottom:  1px solid #000;
  outline: ${(props) => (props.error ? '1px solid red' : 'none')};
  
    ::placeholder{
        font-family: 'Kaushan Script', cursive;
}
`;
