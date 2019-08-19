const initialState = {
  distance: '',
  places:[
    {name:'',x:'',y:'',z:''},
    {name:'',x:'',y:'',z:''}
  ]
}
export const pathReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_DISTANCE_SUCCESS':
      return { ...state, distance: action.payload };
    case 'ADD_PLACE':
      return { ...state, places: [...state.places, action.payload] };
    case 'DEL_PLACE':
      state.places.splice(action.payload,1);
      return { ...state, places: state.places };
    default:
      return state;
  }
}