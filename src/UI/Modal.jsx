import PropTypes from "prop-types";
import { useTasks } from "../utilities/useTasks";

function Modal({ children, handleSubmit }) {
  const { onSubmit } = useTasks();
  return (
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Modal;
