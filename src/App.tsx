import Modal            from "react-modal";
import { useState }     from 'react'
import { Dashboard }    from "./components/Dashboard";
import { Header }       from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');


export const App = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }


  function handlCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    
    <TransactionsProvider>

      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlCloseNewTransactionModal}
      />      
      
    </TransactionsProvider >
  );
}


