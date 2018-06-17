import React, { PropTypes } from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

const events = ['Mountain climb', 'Camping', 'Haik', 'Fishing'];

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


let EventForm = (props) => {
    const { handleSubmit, items, placeholder, dispatch, error } = props;

    return (<form>
        <div className="eventRow">
            <div className="group groupSmall eventColumn">
                <Field name="city" component="input" type="text" className="customInput customInputSmall" required />
                <span className="highlight"></span>
                <span className="bar barSmall"></span>
                <label>City</label>
            </div>
            <div className="eventColumn eventDropDown">
                        <Field
                    name="eventType"
                    component={renderDropdownList}
                    data={events}
                    valueField="typeId"
                    textField="name"
                    placeholder={placeholder}
                    required
                    />
            </div>
        </div>
        <div className="eventRow">
            <div className="group groupSmall eventColumn">
                <Field name="eventDate" component="input" type="text" className="customInput customInputSmall" required />
                <span className="highlight"></span>
                <span className="bar barSmall"></span>
                <label>Date</label>
            </div>
            <div className="eventColumn">
                <button type="submit" className="defaultButton defaultButton__small defaultButton--frontpage">
                    <span className="defaultButton--generalText"> ADD </span>
                </button>
            </div>
        </div>
    </form>);
}


EventForm = reduxForm({
    form: 'eventForm'
})(EventForm);

export default EventForm;