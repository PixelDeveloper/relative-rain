import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: {id: 0, name: "No event"}
        };

        this.setCurrentEvent = this.setCurrentEvent.bind(this);
    }
    componentWillMount() {

    }

    setCurrentEvent = function(value) {
        this.setState(({
            selectedEvent: value
        }));

        this.props.selectEvent(value);
    };

    submitSelection = value => {
        
    };

    render() {
        return <div className="eventsContainer">
            <RenderEvents events={this.props.events} click={this.setCurrentEvent}/>
            <button onClick={this.setCurrentEvent}></button>
        </div>
    }

}

const RenderEvents = props => {
    const {events, click} = props;
    return (
    <ul>
    {events.map(event => (
    <li key={event.id}>
            <span onClick={() => click(event)}>{event.name}</span>
    </li>
    ))}
</ul>)
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);