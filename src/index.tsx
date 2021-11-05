import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/deprecated/index";
import rootStore from "./store";
import { PersistGate } from "redux-persist/integration/react";

// render(
//   <Provider store={configureStore({})}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

render(
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
