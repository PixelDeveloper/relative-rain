import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {request, add} from '../../modules/event';
import EventForm from './eventForm';
import Events from './events';
import EventInfo from './eventInfo';
import '../../style/event.css';

class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.setCurrentEvent = this.setCurrentEvent.bind(this);
        this.state = {
            events : props.events,
            setCurrentEvent: this.setCurrentEvent,
            currentEvent: {id: 1, name:"kebnekajse"},
            setEvent : this.setCurrentEvent
        };
    };

    // Replaced componentWillMount with this because its obselete.
    componentDidMount() {
        this.props.request(0);
    };

    componentWillReceiveProps() {
        if (this.props.addingEvent) {
          this.props.request();
        }
    };

    submitSelection = values => {
    };

    handleSubmit = values => {
        this.props.add(values);
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
                    <EventForm events={this.props.eventTypes} onSubmit={this.handleSubmit} placeholder="Choose" />
                </div>
                <div className="newEventTitle"> Upcoming events </div>
                <Events events= {this.props.events} selectEvent={this.setCurrentEvent} />
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

// TODO: Anders added this, to give events an empty array to keep it from crashing on the map function
// maybe it should be moved to the events file, or maybe it has to be here. Understand.
// EventComponent.defaultProps = {
//     events: []
// };


const mapStateToProps = state => ({
    isGettingEvent: state.event.isGettingEvents,
    events: state.event.events,
    addingEvent: state.event.addingEvent,
    eventTypes: state.event.eventTypes,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            request,
            add
        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);