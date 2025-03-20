import Expense from "../models/expenseModel.js";

export const addExpense = async (req, res) => {
  const { category, type, amount, date } = req.body;

  try {
    const expense = new Expense({
      user: req.user,
      category,
      type,
      amount,
      date,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const editExpense = async (req, res) => {
  const { category, type, amount, date } = req.body;
  const { id } = req.params; // Expense ID

  try {
    let expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    if (expense.user.toString() !== req.user) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    expense = await Expense.findByIdAndUpdate(
      id,
      { category, type, amount, date },
      { new: true }
    );

    res.json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params; 

  try {
    let expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    if (expense.user.toString() !== req.user) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Expense.findByIdAndDelete(id);

    res.json({ msg: "Expense deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};