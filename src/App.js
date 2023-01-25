import "./App.css";
import GlobalThemeProvider from "./contextProviders/globalThemeProvider";
import { Provider } from "react-redux";
import Store from "./store";
import {
  RouterProvider,
} from "react-router-dom";
import Router from './router';
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={Store}>
      <GlobalThemeProvider>
      <CssBaseline />
      <RouterProvider
        router={Router}
        // fallbackElement={<BigSpinner />}
      />
      </GlobalThemeProvider>
    </Provider>
  );
}

export default App;
