import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Login from 'pages/login';
import Main from 'pages/main';
import * as S from './App.styles';

const App: FC = (): JSX.Element => {
  
  return (
    <HashRouter>
      <S.Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </S.Container>
    </HashRouter>
  );
};

export default App;
