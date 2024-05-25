import { useTasks } from "../utilities/useTasks";

function Header() {
  const { handleOpenNewTaskModal } = useTasks();
  return (
    <div className="header">
      <p className="board">Board</p>
      <button className="button" onClick={() => handleOpenNewTaskModal()}>
        Add New Task
      </button>
    </div>
  );
}

export default Header;
