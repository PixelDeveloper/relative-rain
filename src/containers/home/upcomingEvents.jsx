import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request } from '../../modules/event';
import moment from 'moment';
import li_icon from '../../images/li_icon.png';

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

    render() {
        return <div className="upcomingEventsContainer">
            <RenderEvents events={this.props.events}/>
        </div>
    }

}

const RenderEvents = props => {
    const {events} = props;
    return (
<div>
    {events.map(event => (
    <div className="upcomingEvent" key={event.id}>
        <div className="headingPanel">
            <div className="upcomingEventMain pullLeft">{event.name}</div>
            <div className="upcomingEventMain pullRight">{moment(event.date).format("YYYY-MM-DD")}</div>
        </div>
        <div className="panelContent">
            <div className="upcomingEventsRow">
                <img src={li_icon} alt={li_icon} className="imgAlign imgSpin45"/>
                <span className="upcomingEventPadding">  
                    Happens in <span className="upcomingEventsCity">{moment(event.date, "YYYYMMDD").fromNow()} </span>
                </span>
            </div>
            <div className="upcomingEventsRow">
                <img src={li_icon} alt={li_icon} className="imgAlign imgSpin45"/>
                <span className="upcomingEventPadding">  
                    Takes place in <span className="upcomingEventsCity"> {event.city}</span>
                </span>
            </div>
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