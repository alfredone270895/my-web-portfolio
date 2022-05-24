import { Form, FormControlProps } from 'react-bootstrap';
import { FeedbackType } from 'react-bootstrap/Feedback';

type InputCustomProps = Pick<
  FormControlProps,
  'type' | 'placeholder' | 'value'
> & {
  message?: string;
  label?: string;
  feedbackType?: FeedbackType;
  name: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
  onBlur?: any;
  isValid: boolean | undefined;
};

export const Input: React.FC<InputCustomProps> = ({
  type,
  message,
  placeholder,
  feedbackType = 'invalid',
  label,
  name,
  onChange,
  onBlur,
  value,
  isValid,
}) => {
  const handleChange = (val: any) => {
    if (onChange) {
      onChange(name, val);
    }
  };

  return (
    <Form.Group className="mb-3 mt-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        onChange={(target) => handleChange(target.target.value)}
        onBlur={onBlur}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        isValid={isValid}
        isInvalid={isValid === false}
      />
      {message && (
        <Form.Control.Feedback type={feedbackType}>
          {message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
