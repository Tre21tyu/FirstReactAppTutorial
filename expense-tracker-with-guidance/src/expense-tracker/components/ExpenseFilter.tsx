import categories from "../../categories";

interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props ) => {
  return (
    <div>
      <h3>ExpenseFilter</h3>
      <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} id={category} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

export default ExpenseFilter
