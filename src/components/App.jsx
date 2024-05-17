import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { useTasks } from "../utilities/useTasks";

function App() {
  const { modalIsOpen, setModalIsOpen } = useTasks();

  return (
    <div>
      <BrowserRouter>
        {modalIsOpen && (
          <div
            className="background-blur"
            onClick={() => setModalIsOpen(false)}
          ></div>
        )}
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
