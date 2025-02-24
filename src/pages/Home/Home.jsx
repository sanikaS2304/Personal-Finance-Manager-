
import { FaPlus, FaFilter } from "react-icons/fa";
import react, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import Navbar from "../../components/Navbar";



function Home() {

    const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Food', type: 'Dining', amount: 50 },
    { id: 2, category: 'Transport', type: 'Taxi', amount: 20 },
    { id: 3, category: 'Food', type: 'Groceries', amount: 100 },
    { id: 4, category: 'Entertainment', type: 'Movies', amount: 30 },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);
  const handleTypeChange = (e) => setTypeFilter(e.target.value);

  const applyFilters = () => {
    let filtered = expenses;

    if (categoryFilter) {
      filtered = filtered.filter((expense) => expense.category === categoryFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter((expense) => expense.type === typeFilter);
    }

    setFilteredExpenses(filtered);
  };

  const clearFilters = () => {
    setCategoryFilter('');
    setTypeFilter('');
    setFilteredExpenses(expenses);
  };

  const addNewExpense = () => {
    const newExpense = { id: expenses.length + 1, category: 'Misc', type: 'Other', amount: 50 };
    setExpenses([...expenses, newExpense]);
    setFilteredExpenses([...filteredExpenses, newExpense]);
  };

  return (
    <div className="d-flex">
      
      <Navbar />

      <div className="container-fluid ml-5 p-4" style={{ marginLeft: '100px' }}>
      
        <h1>Finance Manager Dashboard</h1>

        
        <div className="d-flex mb-3">
          <select className="form-control w-25 mr-3" value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Misc">Miscellaneous</option>
          </select>

          <select className="form-control w-25 mr-3" value={typeFilter} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="Dining">Dining</option>
            <option value="Taxi">Taxi</option>
            <option value="Groceries">Groceries</option>
            <option value="Movies">Movies</option>
            <option value="Other">Other</option>
          </select>

          <button className="btn btn-primary" onClick={applyFilters}>
            <FaFilter /> Apply Filters
          </button>

          <button className="btn btn-secondary ml-3" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        
        <button className="btn btn-success mb-3" onClick={addNewExpense}>
          <FaPlus /> Add New Expense
        </button>

       
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Home;