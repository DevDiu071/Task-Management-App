import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Platforms from "../pages/Platforms";
import Marketing from "../pages/Marketing";
import RoadMap from "../pages/RoadMap";
import Modal from "../UI/Modal";
import { useTasks } from "../utilities/useTasks";

function AppLayout() {
  const { modalIsOpen, register, handleSubmit } = useTasks();

  return (
    <div className="applayout">
      <SideBar />
      {modalIsOpen && (
        <Modal handleSubmit={handleSubmit}>
          <p>Create a new Column</p>
          <input
            type="text"
            placeholder="Column title"
            id="title"
            {...register("title")}
          />
          <div className="modal-btn">
            <button>Submit</button>
          </div>
        </Modal>
      )}

      <div className="mainpage">
        <Routes>
          <Route path="/" element={<Platforms />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="road_map" element={<RoadMap />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default AppLayout;
