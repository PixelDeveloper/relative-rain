import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EventInfoComponent extends React.Component {

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
        return <div className="eventInfoContainer">
            <p>
                <ul>
                    <li> Hej </li>
                    <li> då </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoComponent);