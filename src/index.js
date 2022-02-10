import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Aquí importamos el reducer creado anteriormente
import rootReducer from "./redux/reducers";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App /> 
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
