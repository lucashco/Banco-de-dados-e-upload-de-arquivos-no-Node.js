// import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  id: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  public async execute({ id, value, type }: Request): Promise<Transaction> {
    const createTransaction = new TransactionsRepository();

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
