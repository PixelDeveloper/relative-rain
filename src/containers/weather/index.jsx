import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    request
} from "../../modules/weather";
import DropDownSelectForm from '../inputcomponents/dropdown'

const cities = ['Stockholm', 'Uppsala']

class WeatherComponent extends React.Component {

    componentWillMount() {
        this.props.request(cities[0]);
    }

    submitSelection = values => {
        console.log(values);
        this.props.request(values.dropdownSelect);
    };

    render() {
        return <div>
            <div className="citySelectionContainer">
                <DropDownSelectForm
                onChange={this.submitSelection}
                items={cities}
                placeholder="City"
                />
            </div>
            <div className="weatherContainer">
                <div className="city">
                    {this.props.weather.city} <span><img src={"http://openweathermap.org/img/w/" + this.props.weather.icon + ".png"} /> </span>
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
            <div className="weatherInfoContainer ">
                <div className="peppText">
                   
                </div>
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