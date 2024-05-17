import { useState } from "react";
import { taskContext } from "../utilities/useTasks";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function TaskProvider({ children }) {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [columnTitle, setColumnTitle] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  function handleIncrement() {
    setModalIsOpen(true);
  }

  function onSubmit(data) {
    if (!data.title) return;
    setColumnTitle("");
    console.log(data);
    setModalIsOpen(false);
    setColumnTitle([...columnTitle, data.title]);
    setCount((count) => count + 1);
    reset();
    console.log(columnTitle);
  }

  return (
    <taskContext.Provider
      value={{
        count,
        handleIncrement,
        taskContext,
        modalIsOpen,
        setModalIsOpen,
        onSubmit,
        columnTitle,
        register,
        handleSubmit,
        reset,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskProvider };
