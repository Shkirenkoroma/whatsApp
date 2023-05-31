import { FC } from 'react'
import * as S from './index.style'

interface IPropsButton {
  onClick: () => void
  buttonName: string
  style?: {}
}

const Button: FC<IPropsButton> = ({
  onClick,
  buttonName,
  style,
}): JSX.Element => {
  return <S.ButtonStyle onClick={onClick}>{buttonName}</S.ButtonStyle>
}

export default Button
