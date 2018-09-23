import { fetch, addTask } from 'domain-task';
import { reset } from 'redux-form';
import {devConnection} from './connectionstrings';

export const REQUEST_EVENT = 'event/REQUEST_EVENT';
export const RECEIVE_EVENT = 'event/RECEIVE_EVENT';
export const TRY_ADD_EVENT = 'event/TRY_ADD_EVENT';
export const ADD_EVENT = 'event/ADD_EVENT';
export const TRY_UPDATE_EVENT = 'event/TRY_UPDATE_EVENT';
export const UPDATE_EVENT = 'event/UPDATE_EVENT';

const initialState = {
  isGettingEvents: false,
  events: [
    {
      id: 0,
      name: 'No items found, service down.',
      eventType: 0,
    }
  ],
  eventTypes: [],
  addingEvent: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EVENT:
      return {
        ...state,
        isGettingEvents: true,
        addingEvent: false
      };
    case RECEIVE_EVENT:
      return {
        events: action.events,  
        isGettingEvents: false
      };
    case TRY_ADD_EVENT:
      return {
        ...state,
        addingEvent: true
      };
    case ADD_EVENT:
      return {
        ...state,
        addingEvent: false
      };
    default:
      return state;
  }
};

export const request = eventId => {
  return dispatch => {
    dispatch({
      type: REQUEST_EVENT
    });

    let fetchTask = fetch(
      devConnection + `/api/Event`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: RECEIVE_EVENT,
          events: data.events,
          eventTypes: data.eventTypes,
          isGettingEquipment: false,
        });
      });

    addTask(fetchTask);

    dispatch(reset('eventForm'));

    dispatch({
      type: REQUEST_EVENT
    });
  };
};

export const add = event => {
  return dispatch => {
    dispatch({
      type: TRY_ADD_EVENT
    });

    var postValue = JSON.stringify(event);
    let fetchTask = fetch(devConnection + `/api/Event`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: postValue
    })
      .then(response => response)
      .then(data => {
        dispatch({
          type: ADD_EVENT
        });
      });

    addTask(fetchTask);

    dispatch({
      type: TRY_ADD_EVENT
    });
  };
};
