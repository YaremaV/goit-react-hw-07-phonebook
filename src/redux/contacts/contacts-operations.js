import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContacts = (name, number) => dispatch => {
  const contacts = { name, number };
  dispatch(addContactsRequest());
  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const deleteContacts = contactsId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactsId}`)
    .then(() => dispatch(deleteContactsSuccess(contactsId)))
    .catch(error => dispatch(deleteContactsError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContacts,
  deleteContacts,
  fetchContacts,
};
