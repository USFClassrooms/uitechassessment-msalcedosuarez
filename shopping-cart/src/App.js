import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./Main/Main";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const store = createStore(() => {}, {});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </Provider>
  );
}

export default App;
