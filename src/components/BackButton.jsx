import { useNavigate } from 'react-router-dom';
import Button from './Button';

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); // the number is how many steps to go back in the browser's history
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
