import { userReducer } from '../../store/reducers/user';
import { userActions } from "../../store/actions/user";

describe('userReducer', () => {
  
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            const initialState = {                 
                registrationUsername: '',
                registrationPassword: '',         
                loginUsername: '',
                loginPassword: '',
                userId: '',
                username: '',
                isLoggedIn: false,
                isLoggedOut: false
            };
            
            expect(userReducer(undefined, action)).toEqual(initialState);
        });
    });

    describe('LOGIN_USER', () => {
        test('returns the correct state', () => {
            const action = { type: userActions.LOGIN_USER, payload: { userId: "5ce3d418848c46165880648c", username: "alex" } };
            const expectedState = {                 
                registrationUsername: '',
                registrationPassword: '',         
                loginUsername: '',
                loginPassword: '',
                userId: '5ce3d418848c46165880648c',
                username: 'alex',
                isLoggedIn: true,
                isLoggedOut: false
            };
      
            expect(userReducer(undefined, action)).toEqual(expectedState);
        });
      });    

      describe('LOGOUT_USER', () => {
        test('returns the correct state', () => {
            const action = { type: userActions.LOGOUT_USER };
            const expectedState = {                 
                registrationUsername: '',
                registrationPassword: '',         
                loginUsername: '',
                loginPassword: '',
                userId: '',
                username: '',
                isLoggedIn: false,
                isLoggedOut: true
            };
      
            expect(userReducer(undefined, action)).toEqual(expectedState);
        });
      }); 

});