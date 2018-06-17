import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {

    }

    submitSelection = values => {
    };

    render() {
        return <div className="eventsContainer">
            <p>
                <ul>
                    <li> Kebnekajse - 7 juli </li>
                    <li> Storsjön - 23 augusti </li>
                </ul>
            </p>
        </div>
    }

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);