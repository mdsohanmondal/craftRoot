import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;

const Option = styled.option``;

// Component
const SelectField = ({
  name,
  options = [],
  defaultValue = '',
  onChange = '',
  defaultOpt,
  value,
}) => {
  return (
    <Container>
      <Select
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <Option value="">{defaultOpt}</Option>
        {options.map((opt, index) => (
          <Option key={index} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectField;
