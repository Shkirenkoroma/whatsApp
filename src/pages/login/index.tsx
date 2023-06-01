import { FC, useEffect, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from 'components/input'
import Button from 'components/button'
import { useDispatch } from 'react-redux'
import { addDataUser } from 'redux/slices/authSlice'
import * as S from './index.styles'

const Login: FC = (): JSX.Element => {
  const [idInstance, setIdInstance] = useState<string>('')
  const [apiToken, setApiToken] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  const clickHandler = (): void => {
    if (!idInstance || !apiToken) {
      setError(true)
    } else {
      navigate('/main')
      localStorage.setItem(
        'user',
        JSON.stringify({ id: idInstance, token: apiToken }),
      )
      dispatch(addDataUser({ id: idInstance, token: apiToken }))
    }
  }

  const inputHandlerId = (e: ChangeEvent<HTMLInputElement>): void => {
    setIdInstance(e.target.value)
    if (e.target.value) {
      setError(false)
    }
  }

  const inputHandlerToken = (e: ChangeEvent<HTMLInputElement>): void => {
    setApiToken(e.target.value)
    if (e.target.value) {
      setError(false)
    }
  }

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
      <Button
        onClick={clickHandler}
        buttonName="Войти"
        style={{ border: '1px solid #000', color: '#000' }}
      />
    </S.LoginWindow>
  )
}

export default Login
