import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/Counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// import { createStore } from redux.
// create a const name store = createStore.
// create a reducer.js file like in this project and then import reducer and pass the reducer here created like in reducer.js. 
// npm install react-redux (it helps us hook up our redux store to our react application).
// import { Provide } from 'react-redux' and wrap the <App/> with it like above.
// and for hooking up the provider component with our store we need to set up a special property called store expected bu the component.
// accessing data from the store we will do it in the counter.js

