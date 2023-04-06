import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

// redux store.
import store from "./redux/app/store";

// main application.
import App from "./App";

// toast notification provider.
import ToastProvider from "./components/ui/ToastProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider />
      <App />
    </Provider>
  </StrictMode>
);
