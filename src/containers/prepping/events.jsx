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

    setCurrentEvent = function(values) {
        this.setState(({
            selectedEvent: values
        }));

        this.props.setCurrentEvent(values);
    };

    submitSelection = values => {
        
    };

    render() {
        return <div className="eventsContainer">
            <RenderEvents {...this.props}/>
        </div>
    }

}

const RenderEvents = props => (
    <ul>
    {props.events.map(event => (
    <li key={event.id}>
            <span onClick={ () => this.setCurrentEvent(event)}>{event.name}</span>
    </li>
    ))}
</ul>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);