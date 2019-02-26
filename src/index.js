import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import groceryList from './stores/shoppingList'

ReactDOM.render(<App store = {groceryList}/>, document.getElementById('root'));

serviceWorker.unregister();
