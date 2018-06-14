import React, {PropTypes} from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';
import WeatherComponent from '../weather';

const Home = props => (
  <div>
    <div className="homeContainer">
      <div className="generalInfoContainer">
        {/* TODO: Insert general info component */}
        <WeatherComponent/>
      </div>
      <div className="dailyTipContainer">
        {/* TODO: Insert daily tip component/function */}
        <p> Daily tip! </p>

        Try hugging a tree, bro!
      </div>
    </div>
    <div className="buttonContainer">
      <button type="submit" className="defaultButton defaultButton--frontpage" onClick={() => props.changePage()}>
        <span className="defaultButton--generalText"> Go to equipment -> </span>
      </button>
    </div>
  </div>

);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/equipment')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
