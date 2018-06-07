import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    request
} from "../../modules/weather";

class WeatherComponent extends React.Component {

    componentWillMount() {
        this.props.request();
        
    }

    render() {
        return <div>
            <div className="city">
                {this.props.weather.city} <span><img src={"http://openweathermap.org/img/w/" + this.props.weather.icon + ".png"}/> </span>
            </div>
            <div>
                {this.props.weather.weather}/{this.props.weather.weatherDescription}
            </div>
            <div>
                {this.props.weather.temp} °C
            </div>
            <div>
                {this.props.weather.date}
            </div>
        </div>
    }

} 

const mapStateToProps = state => ({
    isGettingWeather: state.weather.isGettingWeather,
    weather: state.weather.weather,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(
    {
        request
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);