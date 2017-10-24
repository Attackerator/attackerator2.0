import deepFreeze from 'deep-freeze';
import reducer from '../auth-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('Should save a token',() => {
  let state = defaultState;
  let action = {
    type: 'TOKEN_SET',
    payload: 'thisisatoken'
  };

  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual({ auth: 'thisisatoken' });
});

test('Should delete the token',() => {
  let state = { auth: 'thisisatoken' };
  let action = { type: 'TOKEN_DELETE' };

  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual({ auth: null })
});
