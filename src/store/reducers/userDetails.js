import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

export const initialState = {
  id: '',
  name: '',
};

const detailsUpdate = (state, action) => {
  return updateObject(state, {
    id: action.data.id,
    name: action.data.name,
  });
};


const DetailsReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case actionTypes.DETAILS:
      return detailsUpdate(state, action);
    default:
      return state;
  }
};

export default DetailsReducer;
