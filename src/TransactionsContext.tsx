import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
};

// Dados que preciso receber para criar uma transação
// TransactionInput vai herdar todos os campos de Transaction, menos 'id' e 'createdAt'
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


// Informando que no children do Component TransactionsProvider recebe qualquer tipo de conteúdo.
// ReactNode: Aceita qualquer tipo de conteúdo válido para o React
interface TransactionsProviderProps {
    children: ReactNode
};

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions, 
            transaction
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};