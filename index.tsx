import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './src/styles/main.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './src/reportWebVitals';
import ticketReducer from './src/features/tickets/ticketSlice';
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
