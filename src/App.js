import "./styles/App.css";
import { Sidebar } from "./components";
import RouterPage from "./router/RouterPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />
        <RouterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
