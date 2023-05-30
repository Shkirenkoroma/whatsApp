import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline: ${(props) => (props.error ? '2px solid red' : 'none')};
`;
