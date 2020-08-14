import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { smurfReducer } from './store/reducers/SmurfReducer'
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store} >
    <App /> 
</Provider>, 
document.getElementById("root")
);
