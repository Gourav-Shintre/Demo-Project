import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoutes/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
