import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request } from '../../modules/event';
import moment from 'moment';

class UpcomingEventsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: {id: 0, name: "No event"}
        };
    }
    componentDidMount() {
        this.props.request(0);
    }

    submitSelection = value => {
        
    };

    render() {
        return <div className="upcomingEventsContainer">
            <RenderEvents events={this.props.events}/>
        </div>
    }

}

const RenderEvents = props => {
    const {events, click} = props;
    return (
<div>
    {events.map(event => (
    <div className="upcomingEvent" key={event.id}>
            <span className="upcomingEventMain">{event.name} - {moment(event.date).format("YYYY-MM-DD")}</span>
            <div className="upcomingEventsRow">
                Happens in <span>{moment(event.date, "YYYYMMDD").fromNow()} </span>
            </div>
            <div className="upcomingEventsRow">
                Takes place in <span className="upcomingEventsCity"> {event.city}</span>
            </div>
    </div>
    ))}
</div>)
}

const mapStateToProps = state => ({
    isGettingEvent: state.event.isGettingEvents,
    events: state.event.events,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            request
        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEventsComponent);