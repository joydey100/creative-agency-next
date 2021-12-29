import Header from "../components/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
