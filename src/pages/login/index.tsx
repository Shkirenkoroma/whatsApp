import { FC, useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'components/input';
import Button from 'components/button';
import * as S from './index.styles';

const Login: FC = (): JSX.Element => {
  const [idInstance, setIdInstance] = useState<string>('');
  const [apiToken, setApiToken] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  const clickHandler = () => {
    if (!idInstance || !apiToken) {
      setError(true);
    } else {
      navigate('/main');
    }
  };

  const inputHandlerId = (e: ChangeEvent<HTMLInputElement>) => {
    setIdInstance(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  };
  const inputHandlerToken = (e: ChangeEvent<HTMLInputElement>) => {
    setApiToken(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  };

  return (
    <S.LoginWindow>
      <S.Title>Введите данные из личного кабинета Green API</S.Title>
      <Input
        textholder="IdInstance"
        onChange={inputHandlerId}
        value={idInstance}
        error={error}
      />
      <Input
        textholder="ApiTokenInstance"
        onChange={inputHandlerToken}
        value={apiToken}
        error={error}
      />
      <Button onClick={clickHandler} buttonName="Войти" />
    </S.LoginWindow>
  );
};

export default Login;
