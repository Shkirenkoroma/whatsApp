import { FC } from 'react';
import * as S from './index.style';

interface IPropsButton {
  onClick: () => void;
  buttonName: string;
}

const Button: FC<IPropsButton> = ({ onClick, buttonName }): JSX.Element => {
  return <S.ButtonStyle onClick={onClick}>{buttonName}</S.ButtonStyle>;
};

export default Button;
