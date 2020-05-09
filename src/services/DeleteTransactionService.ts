import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exits!');
    }

    await transactionRepository.delete(id);
  }
}

export default DeleteTransactionService;
