import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css';

momentLocalizer(moment);

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


const renderDateTimePicker = ({ input: { onChange, value }, showTime, currentDate }) =>
    <DateTimePicker
        onChange={onChange}
        format="YYYY-MM-DD"
        time={showTime}
        value={!value ? null : new Date(value)}
        defaultValue={currentDate}
    />

let EventForm = (props) => {
    const { handleSubmit, placeholder } = props;

    return (<form name="eventForm" onSubmit={handleSubmit}>
        <div className="eventRow">
            <div className="eventColumnSmall eventInputDescription">Name it!</div>
            <div className="group groupSmall eventColumnBig">
                <Field name="name" component="input" type="text" className="customInput" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
            </div>
        </div>
        <div className="eventRow">
            <div className="eventColumnSmall eventInputDescription">Where?</div>
            <div className="group groupSmall eventColumnBig">
                <Field name="city" component="input" type="text" className="customInput" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>City</label>
            </div>
        </div>
        <div className="eventRow">
            <div className="eventColumnSmall eventInputDescription">What?</div>
            <div className="eventColumnBig eventDropDown">
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
            <div className="eventColumnSmall eventInputDescription">When?</div>
            <div className="group groupSmall eventColumnBig">
                <Field name="date" 
                component={renderDateTimePicker} 
                showTime={false} 
                currentDate={new Date()}
                className="customInput" 
                required />
                <span className="highlight"></span>
                <span className="bar barSmall"></span>
            </div>
        </div>
        <div className="eventRow">
        <div className="eventColumnSmall eventInputDescription">Description</div>
            <div className="group groupSmall eventColumnBig">
                <Field name="description" component="textarea" type="text" className="customInput" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Describe</label>
            </div>
        </div>
        <div className="eventRow">
            <div className="">
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