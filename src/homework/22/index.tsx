import { Provider } from "react-redux";
import App from "./App";
import { store } from './store';

const Homework = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Homework;
