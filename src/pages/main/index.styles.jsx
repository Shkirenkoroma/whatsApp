import styled from 'styled-components';
import background from 'assets/img/backgroundchat.png';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  background-color: #1c2225;
  border-radius: 10px;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: #ffffff;
  font-size: 28px;
  margin-left: 40px;
`;

export const Aside = styled.aside`
  position: absolute;
  max-width: 300px;
  width: 100%;
  min-height: 600px;
  background-color: #111b21;
`;

export const ChatWindow = styled.div`
  position: relative;
  left: 300px;
  width: 100%;
  max-width: 700px;
  height: 500px;
  background-image: url(${background});
`;
