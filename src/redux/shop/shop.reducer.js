/*
 ** As we are working with firebase shopdata we do not need to import our SHOP_DATA anymore
 import SHOP_DATA from "./shop.data";
 */

import shopActionTypes from "./shop.types";

const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
