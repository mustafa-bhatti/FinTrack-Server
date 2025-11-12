import balanceModel from '../models/balance.model.js';

const getBalancesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    let latestBankBalance = await balanceModel
      .findOne({ user_id, balanceType: 'bank' })
      .sort({ date: -1 });
    console.log(latestBankBalance);
    if (!latestBankBalance) {
      latestBankBalance = { amount: 0 };
    }
    let latestWalletBalance = await balanceModel
      .findOne({ user_id, balanceType: 'wallet' })
      .sort({ date: -1 });
    console.log(latestWalletBalance);
    if (!latestWalletBalance) {
      latestWalletBalance = { amount: 0 };
    }
    let balanceArray = {};
    balanceArray.bank = latestBankBalance.amount;
    balanceArray.wallet = latestWalletBalance.amount;

    console.log(balanceArray);

    res.status(200).json({
      message: 'Balances fetched successfully',
      success: true,
      balances: balanceArray,
    });
    // -------------------------------//
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching balances',
      success: false,
      error: error.message,
    });
  }
};

export { getBalancesByUser };
