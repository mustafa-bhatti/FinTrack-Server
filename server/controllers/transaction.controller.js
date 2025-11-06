import transactionModel from '../models/transactions.model.js';

export const addTransaction = async (req, res) => {
  try {
    let { user_id, date, amount, type, category, source } = req.body;
    if (!user_id || !type || !category || !amount || !date || !source) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Normalize and validate input fields
    type = type.toLowerCase();
    category = category.toLowerCase();
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
      return res
        .status(400)
        .json({ message: 'Amount must be a positive number' });
    }
    const newTransaction = new transactionModel({
      user_id,
      type,
      category,
      date: new Date(date),
      amount,
      source,
    });

    await newTransaction.save();
    res.status(200).json({
      message: 'Transaction added successfully',
      transaction: newTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding transaction', error });
  }
};

export const getTransactionsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const transactions = await transactionModel
      .find({ user_id })
      .sort({ date: -1 });
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { transaction_id } = req.params;

    const deletedTransaction = await transactionModel.findByIdAndDelete(
      transaction_id
    );
    res.status(200).json({
      message: 'Transaction deleted successfully',
      transaction: deletedTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction', error });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { transaction_id } = req.params;
    const { date, amount, type, category, source } = req.body;

    if (!date || !amount || !type || !category || !source) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedTransaction = await transactionModel.findByIdAndUpdate(
      transaction_id,
      { date, amount, type, category, source },
      { new: true }
    );

    res.status(200).json({
      message: 'Transaction updated successfully',
      transaction: updatedTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating transaction', error });
  }
};

// export const getTransactionSummary = async (req, res) => {
//   try {
//     const { user_id } = req.params;
//     const transactions = await transactionModel.find({ user_id });
//     const summary = transactions.reduce((acc, transaction) => {
//       if (transaction.type === 'Income') {
//         acc.totalIncome += transaction.amount;
//       } else {
//         acc.totalExpenses += transaction.amount;
//       }
//       return acc;
//     }, { totalIncome: 0, totalExpenses: 0 });

//     res.status(200).json({ summary });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching transaction summary', error });
//   }
// };
