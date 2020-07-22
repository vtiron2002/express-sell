import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./styles/main.scss";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./reducers/reducers";


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
