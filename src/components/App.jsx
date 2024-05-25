import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { useTasks } from "../utilities/useTasks";

function App() {
  const { filterOpen, closeFilterAndModal } = useTasks();

  return (
    <div>
      <BrowserRouter>
        {filterOpen && (
          <div
            className="background-blur"
            onClick={() => closeFilterAndModal()}
          ></div>
        )}
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
