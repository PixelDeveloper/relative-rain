import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

const renderDropdownList = ({
  input,
  data,
  valueField,
  textField,
  placeholder
}) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    placeholder={placeholder}
  />
);

// Ok so const makes a component only available inside the file it's declared.
let EquipmentForm = props => {
  const { handleSubmit, items, placeholder } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Select equipment</span>
        <Field
          name="equipmentType"
          component={renderDropdownList}
          data={items}
          valueField="typeId"
          textField="name"
          placeholder={placeholder}
          required
        />
      </div>
      <div className="group">
        <Field name="name" component="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Name</label>
      </div>
      <button className="inputButton" type="submit">
        {' '}
        Add{' '}
      </button>
    </form>
  );
};

EquipmentForm = reduxForm({
  form: 'equipmentForm'
})(EquipmentForm);

export default EquipmentForm;
