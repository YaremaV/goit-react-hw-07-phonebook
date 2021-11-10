import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contactsReducer from '../redux/contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default { store };
// console.log(process.env.NODE_ENV);
