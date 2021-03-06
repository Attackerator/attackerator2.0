import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postSaveRequest = (charId,save) => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/save/${charId}`)
  .set({Authorization: `Bearer ${token}`})
  .send(save)
  .then(res => {
    dispatch(character.getCharacterRequest(res.body.characterId));
  });
};

export const putSaveRequest = (oldSave,newSave) => dispatch => {
  let token = get_cookie('token');
  console.log({oldSave,newSave, token});
  return request.put(`${API_URL}/api/save/${oldSave._id}`)
  .set({Authorization: `Bearer ${token}`})
  .send(newSave)
  .then(res => {
    dispatch(character.getCharacterRequest(oldSave.characterId));
  });
};

export const deleteSaveRequest = save => dispatch => {
  let token = get_cookie('token');
  console.log(save);
  return request.delete(`${API_URL}/api/save/${save._id}`)
  .set({Authorization: `Bearer ${token}`})
  .then(res => dispatch => {
    dispatch(character.getCharacterRequest(save.characterId));
  });
};
