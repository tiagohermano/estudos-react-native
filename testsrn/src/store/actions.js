export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      text,
    },
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      id,
    },
  }
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    payload: {
      id,
    },
  }
}
