import PropTypes from "prop-types";
import { useTasks } from "../utilities/useTasks";

function AddNewTaskModal({ children, handleSubmit }) {
  const { onSubmitTask } = useTasks();

  return (
    <form className="new-task-modal" onSubmit={handleSubmit(onSubmitTask)}>
      {children}
    </form>
  );
}

AddNewTaskModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AddNewTaskModal;
