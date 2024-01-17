import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod'; 
import { zodResolver } from '@hookform/resolvers/zod';
// import styles from './ExpenseTracker.module.css'; 

const schema = z.object({
  description: z
  .string()
    .min(3, {message: 'Enter a valid description'}),
  amount: z
    .number({invalid_type_error: 'Enter a valid price'})
    .min(1, {message: 'At least 1 USD is required'}),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Description</label>
        <input 
          { ...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )} 
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input 
          { ...register('amount', { valueAsNumber: true })}
          id='amount'
          type="number"
          className='form-control'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )} 
      </div>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  );
};

export default ExpenseTracker;
