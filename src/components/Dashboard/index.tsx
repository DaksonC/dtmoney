import { Container } from "./styles";
import { Summary } from "../Summary/indext";
import { TransactionTable } from "../TransactionTable";

export function Dashboard(){
    return(
        <Container>
           <Summary /> 
           <TransactionTable />
        </Container>

    )
}