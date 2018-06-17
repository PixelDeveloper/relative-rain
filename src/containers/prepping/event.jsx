import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EventForm from './eventForm';
import Events from './events';
import EventInfo from './eventInfo';
import { QuickAddEquipment } from '../equipment'
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import '../../style/event.css';

class EventComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };

    componentWillMount() {

    };

    submitSelection = values => {
    };

    handleSubmit = values => {

    };

    render() {
        return <div className="eventPage">
            <div className="eventColumnLeft">
                <div className="newEventTitle"> New event </div>
                <div className="eventContainer">
                    <EventForm {...this.props} />
                </div>
                <div className="newEventTitle"> Upcoming events </div>
                <Events />
                <div className="quickAddEquipment">
                    <QuickAddEquipment />
                </div>
            </div>
            <div className="eventColumnRight">
                <div className="eventDetailsTitle">Event details</div>
                <EventInfo/>
            </div>
        </div>
    };

}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);