import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

const renderDropdownList = ({ input, data, valueField, textField, placeholder }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    placeholder={placeholder}
  />
    
let DropDownSelectForm = props => {
    const { onChange, items, placeholder } = props
    return <form onSubmit={onChange}>
            <div>
            <Field
                name="dropdownSelect"
                component={renderDropdownList}  
                data={items}
                valueField="typeId"
                textField="name"
                placeholder={placeholder}
                />
            </div>
        </form>
    
}

DropDownSelectForm = reduxForm({
    form: 'DropDownSelectForm' 
})(DropDownSelectForm)

export default DropDownSelectForm