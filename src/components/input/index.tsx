import { FC, ChangeEvent } from 'react'
import * as S from './index.styles'

interface IPropsInput {
  textholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  error?: boolean
  style?: any
}

const Input: FC<IPropsInput> = ({
  onChange,
  value,
  textholder,
  error,
  style,
}): JSX.Element => {
  return (
    <S.Input
      type="text"
      placeholder={textholder}
      onChange={onChange}
      value={value}
      error={error}
      style={style}
    />
  )
}

export default Input
