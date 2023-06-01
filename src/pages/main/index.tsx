import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewContact, selectContact, getMessage } from 'redux/slices/contactSlice'
import Button from 'components/button'
import  Input  from 'components/input'
import * as S from './index.styles'

interface IState {
  newContacts: string[]
  chatContact: string
}

interface IContactSlice {
  contacts: IState
}

const Main: FC = (): JSX.Element => {
  const [numberInput, setNumberInput] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const dispatch = useDispatch()
  const { newContacts, chatContact } = useSelector((state: IContactSlice) => state?.contacts)
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate('/')
    localStorage.removeItem('user')
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNumberInput(e.target.value)
  }
 
  const clickHandler = (): void => {
    dispatch(addNewContact(numberInput))
  }

  const listItemHandler = (newContact: string): void => {
    dispatch(selectContact(newContact))
  }

  const messageHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value)
  }

  const sendMessageHandler = (): void => {
    dispatch(getMessage(message))
    console.log('getMessage')
    console.log('getMessage', getMessage(message))
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>WhatsApp Business</S.Title>
        <S.ChatContact>{chatContact}</S.ChatContact>
        <Button onClick={handleClick} buttonName="Выйти" />
      </S.Header>
      <S.Aside>
        <S.Form>
          <Input
            onChange={inputHandler}
            value={numberInput}
            textholder="+7(XXX)XXX-XX-XX или др."
            style={{
              backgroundColor: 'transparent',
              fontSize: '18px',
              height: '35px',
              color: '#fff',
              border: 'none',
            }}
          />
          <Button onClick={clickHandler} buttonName="Добавить" />
        </S.Form>
        <S.Ul>
          {newContacts.map((el: string, index: number) => (
            <S.Li key={index} onClick={() => listItemHandler(el)}>
              {el}
            </S.Li>
          ))}
        </S.Ul>
      </S.Aside>
      <S.ChatWindow />
      <Input
        onChange={messageHandler}
        value={message}
        textholder="Введите сообщение..."
        style={{
          position: 'relative',
          top: '28px',
          left: '461px',
          maxWidth: '539px',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '24px',
          color: '#fff',
        }}
      />
      {message && (
        <Button
          onClick={sendMessageHandler}
          buttonName="Отправить"
          style={{ float: 'right', marginTop: '30px', marginRight: '30px' }}
        ></Button>
      )}
    </S.Container>
  )
}

export default Main
