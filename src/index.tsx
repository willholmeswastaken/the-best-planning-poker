import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { persistStore } from 'redux-persist';
import configureRedux from './configureRedux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(configureRedux)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configureRedux}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
