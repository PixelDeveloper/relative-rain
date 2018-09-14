import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

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
        <div className="eventInfoTitle">
            {this.props.name}
        </div>
        <div className="eventInfoRow">
            <div className="eventInfoSubTitleCol eventInfoSubTitle">
                When: 
            </div>
            <div className="eventInfoSubTextCol eventInfoSubText">
                {moment(this.props.date).format("YYYY-MM-DD")}
            </div>
        </div>
        <div className="eventInfoRow">
            <div className="eventInfoSubTitleCol eventInfoSubTitle">
                Where:  
            </div>
            <div className="eventInfoSubTextCol eventInfoSubText">
                {this.props.city}
            </div>
        </div>
        <div className="eventInfoRow">
            <div className="eventInfoSubTitleCol eventInfoSubTitle">
                What:  
            </div>
            <div className="eventInfoSubTextCol eventInfoSubText">
                {this.props.description}
            </div>
        </div>
        <div className="eventInfoRow">
            <div className="eventInfoSubTitleCol eventInfoSubTitle">
                Activity:  
            </div>
            <div className="eventInfoSubTextCol eventInfoSubText">
                {this.props.eventType}
            </div>
        </div>
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