import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  public async execute({ id, value, type }: Request): Promise<Transaction> {
    const createTransaction = getCustomRepository(TransactionsRepository);

    const transaction = createTransaction.create({
      id,
      value,
      type,
    });

    await createTransaction.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
