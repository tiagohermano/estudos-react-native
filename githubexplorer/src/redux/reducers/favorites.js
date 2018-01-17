export default function favorites(state = [], action) {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [ ...state, action.payload.repository];
    default:
      return state;
  }
}
