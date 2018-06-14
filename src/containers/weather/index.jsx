import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    request
} from "../../modules/weather";
import { CityDropDown } from '../inputcomponents/dropdown'

const cities = ['Stockholm', 'Uppsala']
class WeatherComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            city: cities[0]
        };
        this.incrementDay = this.incrementDay.bind(this);
        this.decrementDay = this.decrementDay.bind(this);
        this.requestWeather = this.requestWeather.bind(this);

    }
    componentWillMount() {
        this.props.request(this.state.city, this.state.day);
    }

    submitSelection = values => {
        console.log(values);
        this.setState({
            city: values.dropdownSelect
        });
        this.props.request(values.dropdownSelect, this.state.day);
    };

    incrementDay() {
        // Checkout counter, but that seems so over complicated for this case...
        const day = this.state.day + 1;
        this.setState(prevState => ({
            day: prevState.day + 1
        }));
        this.requestWeather(day);
    };

    decrementDay() {
        // Checkout counter, but that seems so over complicated for this case...
        const day = this.state.day - 1;
        this.setState(prevState => ({
            day: prevState.day - 1
        }));
        this.requestWeather(day);
    };

    requestWeather(day) {
        this.props.request(this.state.city, day);
    }

    render() {
        return <div>
            <div className="citySelectionContainer">
                <div className="cityContainer">
                    <CityDropDown
                        onChange={this.submitSelection}
                        items={cities}
                        placeholder="City"
                    />
                </div>
                <div className="dayContainer">
                    <div className="nextDayButtonContainer">
                        <button className="nextButton nextButton--frontpage"
                            disabled={this.state.day == 0 || this.props.isGettingWeather} onClick={this.decrementDay}>
                            <span>{"←"}</span>
                        </button>
                    </div>
                    <div className="selectDay"> {this.props.weather.date} </div>
                    <div className="nextDayButtonContainer">
                        <button className="nextButton nextButton--frontpage"
                            disabled={this.state.day == 4 || this.props.isGettingWeather} onClick={this.incrementDay}>
                            <span>{"→"}</span>
                        </button>
                    </div>
                </div>
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