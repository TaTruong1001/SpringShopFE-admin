import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
