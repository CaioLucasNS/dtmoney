import { useEffect } from "react"
import { Container } from "./styles"

export function TransactionsTable() {
    let appAdress = 'localhost:3000'

    useEffect(() => {
        fetch(`http://${appAdress}/api/transactions`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>13/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>17/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}