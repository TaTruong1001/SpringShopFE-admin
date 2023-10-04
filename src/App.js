import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
