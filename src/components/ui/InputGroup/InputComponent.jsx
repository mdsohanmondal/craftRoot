import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  color: #374151; /* text-gray-700 */
`;

const StyledInput = styled.input`
  padding: 0.625rem 0.75rem; /* px-3 py-2.5 */
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid #d1d5db; /* border-gray-300 */
  border-radius: 0.375rem; /* rounded-md */
  background-color: #ffffff;
  color: #111827; /* text-gray-900 */
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #2563eb; /* focus:border-blue-600 */
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2); /* ring */
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #ffffff;
  color: #111827;
  resize: vertical;
  min-height: 100px;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const InputComponent = ({
  value,
  name,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
  htmlFor,
  text,
  placeholder = '',
}) => {
  return (
    <Container>
      {text && <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>}
      {type === 'textarea' ? (
        <StyledTextarea
          id={htmlFor}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      ) : (
        <StyledInput
          id={htmlFor}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
};

export default InputComponent;
