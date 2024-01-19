// ExpenseLogger.tsx
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  description: z.string().min(3, { message: 'Enter a valid description' }),
  amount: z.number({ invalid_type_error: 'Enter a valid price' }).min(1, { message: 'At least 1 USD is required' }),
  category: z.string().min(1, { message: 'Select a category' }), // New category field
});

type FormData = z.infer<typeof schema>;

interface ExpenseLoggerProps {
  onSubmit: (data: { description: string; amount: number; category: string }) => void;
  onClear: () => void;
}

const ExpenseLogger: React.FC<ExpenseLoggerProps> = ({ onSubmit, onClear }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: FieldValues) => {
    onSubmit({ description: data.description, amount: data.amount, category: data.category });
    reset(); // Clear the form after submitting
  };

  const handleClear = () => {
    onClear();
    reset(); // Clear the form without submitting
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register('category')} id="category" className="form-control">
          <option value="">Select a category</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="candy">Candy</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary me-2" type="submit">
        Submit
      </button>
      <button className="btn btn-secondary" type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default ExpenseLogger;

