import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Platforms from "../pages/Platforms";
import Marketing from "../pages/Marketing";
import RoadMap from "../pages/RoadMap";
import Modal from "../UI/Modal";
import { useTasks } from "../utilities/useTasks";
import AddNewTaskModal from "./AddNewTaskModal";
import Button from "../UI/Button";

function AppLayout() {
  const {
    newColumnModalOpen,
    register,
    handleSubmit,
    newTaskModalOpen,
    columnTitle,
    handleStatus,
    status,
  } = useTasks();

  return (
    <div className="applayout">
      <SideBar />
      {newColumnModalOpen && (
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

      {newTaskModalOpen && (
        <AddNewTaskModal handleSubmit={handleSubmit}>
          <h2>Add new Task</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="eg take coffee break"
              {...register("title")}
            />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea
              type="text"
              id="desc"
              placeholder="eg it's always good to take break, this 15 min break will help me recharge"
              {...register("desc")}
            />
          </div>
          <div>
            <label htmlFor="subtasks">Subtasks</label>
            <input
              type="text"
              id="subtasks1"
              placeholder="eg Make coffee"
              {...register("subtasks1")}
            />
            <input
              type="text"
              id="subtasks2"
              placeholder="eg Drink coffee and smile"
              {...register("subtasks2")}
            />
          </div>
          <Button />
          <label htmlFor="status">Status</label>
          <select value={status} onChange={(e) => handleStatus(e)}>
            {columnTitle.map((title) => (
              <option key={Math.random()} value={title}>
                {title}
              </option>
            ))}
          </select>
          <button className="button-create">Add New Subtask</button>
        </AddNewTaskModal>
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
