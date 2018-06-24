import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {request, add} from '../../modules/event';
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
        

        this.setCurrentEvent = this.setCurrentEvent.bind(this);
        this.state = {
            events : [{id: 0, name: "Loading..."}],
            setCurrentEvent: this.setCurrentEvent,
            currentEvent: {id: 1, name:"kebnekajse"}
        };
    };

    componentWillMount() {
        this.props.request(0);
        // TODO: Figure out how to to this.
        // this.setState({
        //     events: this.props.events
        // })
    };

    submitSelection = values => {
    };

    handleSubmit = values => {

    };

    setCurrentEvent = function(values) {
        console.log(values);
        this.setState(({
            currentEvent: values
        }));
    }

    render() {
        return <div className="eventPage">
            <div className="eventColumnLeft">
                <div className="newEventTitle"> New event </div>
                <div className="eventContainer">
                    <EventForm {...this.props} />
                </div>
                <div className="newEventTitle"> Upcoming events </div>
                <Events {...this.state} />
                <div className="quickAddEquipment">
                    {/* TODO:Add content <QuickAddEquipment /> */}

                </div>
            </div>
            <div className="eventColumnRight">
                <div className="eventDetailsTitle">Event details</div>
                <EventInfo {...this.state.currentEvent}/>
            </div>
        </div>
    };

}


const mapStateToProps = state => ({
    isGettingEvent: state.isGettingEvents,
    events: state.events,
    addingEvent: state.addingEvent,
    eventTypes: state.eventTypes,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            request,
            add
        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);