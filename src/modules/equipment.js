import { fetch, addTask } from 'domain-task';
import { reset } from 'redux-form';
import { devConnection } from './connectionstrings';

export const REQUEST_EQUIPMENT = 'equipments/REQUEST_EQUIPMENT';
export const RECEIVE_EQUIPMENT = 'equipments/RECEIVE_EQUIPMENT';
export const TRY_ADD_EQUIPMENT = 'equipments/TRY_ADD_EQUIPMENT';
export const ADD_EQUIPMENT = 'equipments/ADD_EQUIPMENT';

const initialState = {
  isGettingEquipment: false,
  equipments: [
    {
      id: 0,
      name: 'No items found, service down.',
      equipmentCategoryTypeId: 0,
      equipmentType: {
        name: ''
      }
    }
  ],
  equipmentTypes: [],
  addingEquipment: false,
  selectedEquipmentType: 0,
  equipmentCategoryTypeId: 0,
  equipmentCategories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EQUIPMENT:
      return {
        ...state,
        isGettingEquipment: true,
        addingEquipment: false
      };
    case RECEIVE_EQUIPMENT:
      return {
        ...action,
        isGettingEquipment: false
      };
    case TRY_ADD_EQUIPMENT:
      return {
        ...state,
        addingEquipment: true
      };
    case ADD_EQUIPMENT:
      return {
        ...state,
        addingEquipment: false
      };
    default:
      return state;
  }
};

export const request = categoryId => {
  return dispatch => {
    dispatch({
      type: REQUEST_EQUIPMENT
    });

    let fetchTask = fetch(
      devConnection + `/api/Equipment?categoryId=` + categoryId
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: RECEIVE_EQUIPMENT,
          equipments: data.equipments,
          equipmentTypes: data.equipmentTypes,
          equipmentCategoryTypeId: data.equipmentCategoryTypeId,
          isGettingEquipment: false,
          equipmentCategories: data.equipmentCategories
        });
      });

    addTask(fetchTask);

    dispatch(reset('equipmentForm'));

    dispatch({
      type: REQUEST_EQUIPMENT
    });
  };
};

export const add = equipment => {
  return dispatch => {
    dispatch({
      type: TRY_ADD_EQUIPMENT
    });

    var postValue = JSON.stringify(equipment);
    let fetchTask = fetch(devConnection + `/api/Equipment`, {
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
          type: ADD_EQUIPMENT
        });
      });

    addTask(fetchTask);

    dispatch({
      type: TRY_ADD_EQUIPMENT
    });
  };
};
