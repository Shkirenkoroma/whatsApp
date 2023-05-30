import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button';
import * as S from './index.styles';

const Main: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>WhatsApp Business</S.Title>
        <Button onClick={handleClick} buttonName="Выйти"></Button>
      </S.Header>
      <S.Aside />
      <S.ChatWindow />
    </S.Container>
  );
};

export default Main;
