const initialState = {
  distance: '',
  places:[]
}
export const pathReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_DISTANCE_SUCCESS':
      return { ...state, distance: action.payload };
    default:
      return state;
  }
}