import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import equipment from '../../modules/equipment';
// const equipmentTypes = [
//     {name: "All", value: 0},
//     {name: "Shirts", value: 1},
//     {name: "Pants", value: 2},
//     {name: "Shoes", value: 3}
// ];

const renderDropdownList = ({ input, data, valueField, textField, placeholder }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    placeholder={placeholder} />
    
let EquipmentSelectForm = props => {
    const { handleSubmit, onChange, items, placeholder } = props
    return <form onSubmit={handleSubmit}>
            <div>
            <Field
                name="equipmentSelect"
                component={renderDropdownList}
                data={items}
                valueField="value"
                textField="name"
                placeholder={placeholder}
                />
            </div>
        </form>
    
}

EquipmentSelectForm = reduxForm({
    form: 'equipmentSelectForm' 
})(EquipmentSelectForm)

export default EquipmentSelectForm