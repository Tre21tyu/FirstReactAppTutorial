import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./categories";
 
function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const expenses = [
    { id: 1, description: 'apple', amount: 10, category: 'Groceries' },
    { id: 2, description: 'orange', amount: 10, category: 'Groceries' },
    { id: 3, description: 'tomato', amount: 10, category: 'Groceries' },
    { id: 4, description: 'potato', amount: 10, category: 'Groceries' },
    { id: 5, description: 'Rental Property 1', amount: 100000, category: 'Real Estate' },
  ]

  const visibleExpenses = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(c) => setSelectedCategory(c)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => console.log("Vim is the best editor", id)} />
    </div>
  )
}

export default App;
