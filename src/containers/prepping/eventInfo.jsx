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
                <ul>
                    {/* {this.props.currentEvent != null &&
                    <li key={this.props.currentEvent }>
                            <span onClick={ () => this.setCurrentEvent(this.props.currentEvent)}>{this.props.currentEvent.name }</span>
                    </li>
                    } */}
                    <li>
                        {this.props.name}
                    </li>
                </ul>
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