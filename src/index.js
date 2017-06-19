import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers';

const middleware = [ thunk ]
const store = createStore(
	reducer,
	compose(applyMiddleware(...middleware),
	window.devToolsExtension ? window.devToolsExtension(): f=>f
));


ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
