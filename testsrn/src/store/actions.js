export function addTodo() {
  return {
    type: 'ADD_TODO',
    payload: {
      text: 'Estudar o GoNative',
    },
  }
}
