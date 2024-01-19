// App.tsx
import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseLogger from './components/ExpenseLogger/ExpenseLogger';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<{ description: string; amount: number; category: string }[]>([]);

  const handleExpenseSubmit = (data: { description: string; amount: number; category: string }) => {
    setExpenses((prevExpenses) => [...prevExpenses, data]);
  };

  const handleClear = () => {
    setExpenses([]); // Clear the expenses array
  };

  return (
    <div>
      <h1>App</h1>
      <ExpenseLogger onSubmit={handleExpenseSubmit} onClear={handleClear} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
