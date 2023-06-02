import styled from 'styled-components';
import background from 'assets/img/backgroundchat.png';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 700px;
  border-radius: 10px;
  background-color: #1c2225;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1160px;
  height: 100px;
  border-radius: 10px 10px 0px 0px;
`;

export const Title = styled.span`
  margin-left: 40px;
  font-size: 28px;
  color: #ffffff;
`;

export const Aside = styled.aside`
  position: absolute;
  width: 100%;
  max-width: 460px;
  min-height: 600px;
  background-color: #111b21;
`;

export const ChatWindow = styled.div`
  position:relative;
  left: 459px;
  width: 100%;
  max-width: 741px;
  height: 500px;
  background-image: url(${background});
  display: flex;
    flex-direction: column;
    overflow: overlay;
`;

export const Form = styled.form`
  border-bottom: 1px solid #cdcdcd;
`
export const Ul = styled.ul`
  padding:0 10px;
`
export const Li = styled.li`
  padding:10px 0 10px 0;
  color:#fff;
  list-style-type:none;
    
    &:hover{
      cursor:pointer;
      background-color:#cdcdcd;
      transition:all 500ms;
}
`

export const ChatContact = styled.span`
  font-size:24px;
  color:#fff;
 
`

export const RecieveMessage = styled.span`
color: #fff;
    padding: 6px 30px;
    background-color: #877a7a;
    border-radius: 10px;
    width: 8%;
    margin-bottom: 35px;
    word-wrap:break-word;
`