import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
