import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './components/App/App';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));