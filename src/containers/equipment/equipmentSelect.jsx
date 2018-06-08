import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import equipment from '../../modules/equipment';

let stuff = ["orange", "black"];
const renderDropdownList = ({ input, data, valueField, textField, placeholder, defaultValue }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    defaultValue={defaultValue}
    placeholder={placeholder}
  />
    
let EquipmentSelectForm = props => {
    const { onChange, items, placeholder } = props
    return <form onSubmit={onChange}>
            <div>
            <Field
                name="equipmentSelect"
                component={renderDropdownList}  
                data={items}
                valueField="typeId"
                textField="name"
                placeholder={placeholder}
                // defaultValue={3}
                />
            </div>
        </form>
    
}

EquipmentSelectForm = reduxForm({
    form: 'equipmentSelectForm' 
})(EquipmentSelectForm)

export default EquipmentSelectForm