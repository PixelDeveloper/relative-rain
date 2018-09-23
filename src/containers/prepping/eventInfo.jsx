import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
         <IsEventSelected props={this.props}/>
            {/* <RenderSelectedEvent eventInfo={this.props}/> */}
        </div>
    }

}


function IsEventSelected(props) {
    const isSelected = props.props.id !== -1;

    if(isSelected)
        return <RenderSelectedEvent eventInfo={props.props}/>;
    else
        return <RenderNoSelectedEvent/>;
}

const RenderNoSelectedEvent = () => {

return (
<div>
    <div className="eventInfoTitle">
        Select an upcoming event!
    </div>
</div>)

}

const RenderSelectedEvent = props => {
    const {eventInfo} = props;
return (
<div>
    <div className="eventInfoTitle">
        {eventInfo.name}
    </div>
    <div className="eventInfoRow">
        <div className="eventInfoSubTitleCol eventInfoSubTitle">
            When: 
        </div>
        <div className="eventInfoSubTextCol eventInfoSubText">
            {moment(eventInfo.date).format("YYYY-MM-DD")}
        </div>
    </div>
    <div className="eventInfoRow">
        <div className="eventInfoSubTitleCol eventInfoSubTitle">
            Where:  
        </div>
        <div className="eventInfoSubTextCol eventInfoSubText">
            {eventInfo.city}
        </div>
    </div>
    <div className="eventInfoRow">
        <div className="eventInfoSubTitleCol eventInfoSubTitle">
            What:  
        </div>
        <div className="eventInfoSubTextCol eventInfoSubText">
            {eventInfo.description}
        </div>
    </div>
    <div className="eventInfoRow">
        <div className="eventInfoSubTitleCol eventInfoSubTitle">
            Activity:  
        </div>
        <div className="eventInfoSubTextCol eventInfoSubText">
            {eventInfo.eventType}
        </div>
    </div>
</div>)

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventInfoComponent);