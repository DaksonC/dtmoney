import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg  from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const[type, setType] = useState('deposit')

    async function handlCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >

        <button 
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar Modal" />
        </button>

          <Container onSubmit={handlCreateNewTransaction}>

            <h2>Cadastrar Transação</h2>

            <input 
                type="text"
                placeholder="Título" 
                value={title}
                onChange={({ target }) => setTitle(target.value)}
            />

            <input 
                type="number"
                placeholder="Valor" 
                value={amount}
                onChange={({ target }) => setAmount(Number(target.value))}
            />

            <TransactionTypeContainer >
                <RadioBox
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"

                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                type="text"
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>

          </Container>
          
      </Modal>
    )
}