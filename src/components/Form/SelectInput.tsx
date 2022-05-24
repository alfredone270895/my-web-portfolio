import { Form } from 'react-bootstrap';
import Select from 'react-select';
import useWindowDimensions, { SMARTPHONE_BREAKPOINT } from '../../utils/screen';
import { FeedbackType } from 'react-bootstrap/Feedback';

type Option = {
  value: string | number;
  label: string;
  options?: Option[];
};

type SelectProps = {
  name: string;
  value?: Option;
  placeholder?: string;
  className?: string;
  options: Option[];
  isMulti?: boolean;
  onChange?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void;
  onBlur?: any;
  message?: string;
  label?: string;
  feedbackType?: FeedbackType;
  isValid: boolean | undefined;
};

export const SelectInput: React.FC<SelectProps> = ({
  name,
  value,
  options,
  isMulti = false,
  className,
  onChange,
  onBlur,
  placeholder,
  message,
  feedbackType = 'invalid',
  label,
  isValid,
}) => {
  const handleChange = (val: any) => {
    if (onChange) {
      onChange(name, val);
    }
  };

  const handleBlur = (selectedName?: string) => {
    if (onBlur) {
      onBlur(selectedName, true);
    }
  };

  const { width } = useWindowDimensions();

  if (width <= SMARTPHONE_BREAKPOINT) {
    return (
      <Form.Group className="mb-3 mt-3">
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Select
          placeholder={placeholder}
          className={`form-control ${className}`}
          multiple={isMulti}
          onChange={(e) =>
            handleChange({
              value: !Number.isNaN(parseInt(e.target.value, 2))
                ? parseInt(e.target.value, 2)
                : e.target.value,
              label: e.target.options[e.target.options.selectedIndex].text,
            })
          }
          onBlur={() => handleBlur(name)}
          value={value && value.value}
          isValid={isValid}
          isInvalid={isValid === false}
        >
          <option value="">Seleziona un elemento</option>
          {options.map((option) => {
            if (option.options && option.options.length) {
              return option.options.map((option2) => (
                <option key={`option-${option2.value}`} value={option2.value}>
                  {option2.label}
                </option>
              ));
            }
            return (
              <option key={`option-${option.value}`} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Form.Select>

        {message && (
          <Form.Control.Feedback type={feedbackType}>
            {message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    );
  }

  return (
    <Form.Group className="mb-3 mt-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Select
        placeholder={placeholder}
        className={`react-select ${className} ${
          isValid === true ? 'is-valid' : isValid === false ? 'is-invalid' : ''
        }`}
        classNamePrefix="react-select"
        options={options}
        isMulti={isMulti}
        onChange={handleChange}
        onBlur={() => handleBlur}
        value={value}
        noOptionsMessage={() => null}
      />

      {message && (
        <Form.Control.Feedback type={feedbackType}>
          {message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
