export function addUserRequest(username) {
  return {
    type: 'ADD_USER_REQUEST',
    payload: {
      username,
    }
  }
}

export function addUserSuccess(user) {
  return {
    type: 'ADD_USER_SUCCESS',
    payload: {
      user,
    }
  }
}

export function addUserFailure(failure) {
  return {
    type: 'ADD_USER_FAILURE',
  }
}
