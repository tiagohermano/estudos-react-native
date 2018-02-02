import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from '../../src/services/api';
import rootSaga from '../../src/store/sagas';
import * as actions from '../../src/store/userActions';

const userGithubFixture = require('./fixtures/userGithub.json');

describe('Testing User Github SAGA', () => {
  let sagaTeste = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);

    sagaTester.start(rootSaga);
  });


  it('can add user', async () => {
    apiMock.onGet('/users/tiagohermano')
      .reply(200, userGithubFixture['/users/tiagohermano']);

    sagaTester.dispatch(actions.addUserRequest('tiagohermano'));

    await sagaTester.waitFor(actions.addUserSuccess().type);

    expect(sagaTester.getLastestCalledAction())
      .toEqual(actions.addUserSucess(userGithubFixture['/users/tiagohermano']));
  });

  it('throws error when user doesnt exists', async () => {
    apiMock.onGet('/users/fail').reply(400);

    sagaTester.dispatch(actions.addUserRequest('fail'));

    await sagaTester.waitFor(actions.addUserFailure().type);

    expect(sagaTester.getLastestCalledAction())
      .toEqual(actions.addUserFailure());
  });
});
