import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contactsReducer from '../redux/contacts/contacts-reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

// const persistor = persistStore(store);

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
export default { store };
// console.log(process.env.NODE_ENV);
