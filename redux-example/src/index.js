import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Redux exempel

//Reducers - Uppdaterar state i store
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
}

//Store - Innehåller state
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Actions - Bestämmer vad som ska uppdateras i state
const increment = (count) => {
  return {
    type: 'INCREMENT',
    payload: count
  }
}

//Dispatch - Triggar en action från en React komponent
store.dispatch(increment(20));
store.dispatch(increment(20));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
