import ListGroup from "./ListGroup";

  interface Props {
    children: string
    color?: 'primary' | 'secondary'| 'danger';
    onClick: () => void;
  }
  const Button = ({ children, onClick, color='primary' }: Props) => {
    // return (
    // <button type="button" onClick={onClick} className={'btn btn-' + color}>{children}</button>
    // )
    return (
      <ListGroup></ListGroup>
    )
  }


export default Button
