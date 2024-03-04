import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import SignupForm from "./Form/Form";
import EditableForm from "./Form/UserTable";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SignupForm />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
