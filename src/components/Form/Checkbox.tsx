import { Form, FormCheckProps } from 'react-bootstrap';

type CheckboxCustomProps = Pick<
  FormCheckProps,
  'type' | 'feedbackType' | 'isValid' | 'disabled' | 'onClick'
> & {
  name: string;
  message?: string;
  label?: string;
  id?: string;
  checked?: boolean;
};

export const Checkbox: React.FC<CheckboxCustomProps> = ({
  type,
  message,
  feedbackType = 'invalid',
  isValid,
  label,
  id,
  disabled = false,
  name,
  checked = false,
  onClick = () => {},
}) => {
  return (
    <Form.Group className="mb-3 mt-3">
      <Form.Check
        disabled={disabled}
        type={type}
        name={name}
        checked={checked}
        id={id ?? ''}
        onClick={onClick}
        isValid={isValid}
      />

      {label && <Form.Check.Label>{label}</Form.Check.Label>}

      {message && (
        <Form.Control.Feedback type={feedbackType}>
          {message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
