import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ComponentTemplate extends React.Component {

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
        return <div>
        </div>
    }

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            request
        },
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTemplate);