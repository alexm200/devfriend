import configureStore from 'redux-mock-store';

// Actions to be tested
import { userActions } from '../../store/actions/user';

const mockStore = configureStore();
const store = mockStore();

describe('userActions', () => {
    beforeEach(() => {
      store.clearActions();
    });

    describe('loginUser', () => {
        test('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {
              'payload': { userId: "5ce3d418848c46165880648c", username: "alex" },
              'type': userActions.LOGIN_USER,
            },
          ];
      
          store.dispatch(userActions.loginUser("5ce3d418848c46165880648c", "alex"));
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('logoutUser', () => {
        test('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {              
              'type': userActions.LOGOUT_USER,
            },
          ];
      
          store.dispatch(userActions.logoutUser());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });      
});