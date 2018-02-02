export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [ ...state, { id: Math.random(), text: action.payload.text } ];
    }
    case 'REMOVE_TODO': {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case 'COMPLETE_TODO': {
      return state.map(todo =>
        (todo.id === action.payload.id)
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    }
    default:
      return state;
  }
}
