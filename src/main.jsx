import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";
import App from "./App.jsx";
import stroe from "./store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={stroe}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </StrictMode>,
);
