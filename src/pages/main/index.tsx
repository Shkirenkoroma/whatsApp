import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'components/button'
import { Input } from 'components/input'
import { addNewContact, selectContact } from 'redux/slices/contactSlice'
import * as S from './index.styles'

interface IState {
  newContacts: string[]
  selectContact: string
}

interface IContactSlice {
  contacts: IState
}

const Main: FC = (): JSX.Element => {
  const [numberInput, setNumberInput] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const dispatch = useDispatch()
  const listContacts =
    useSelector((state: IContactSlice) => state?.contacts?.newContacts) ?? []
  const chatContact = useSelector(
    (state: IContactSlice) => state.contacts.selectContact,
  )
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberInput(e.target.value)
  }

  const clickHandler = () => {
    dispatch(addNewContact(numberInput))
  }

  const listItemHandler = (newContact: string) => {
    dispatch(selectContact(newContact))
  }

  const messageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const sendMessageHandler = () => {
    console.log('Отправить сообщение')
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
          {listContacts.map((el: string, index: number) => (
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
          maxWidth: '600px',
          backgroundColor: 'transparent',
          // border:'none',
          fontSize: '24px',
          color: '#fff',
        }}
      />
      <Button
        onClick={sendMessageHandler}
        buttonName="Отправить"
        style={{ float: 'right', marginTop: '25px' }}
      ></Button>
    </S.Container>
  )
}

export default Main
