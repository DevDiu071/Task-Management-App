import { useState } from "react";
import { taskContext } from "../utilities/useTasks";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function TaskProvider({ children }) {
  const [count, setCount] = useState(0);
  const [newColumnModalOpen, setNewColumnModalOpen] = useState(false);
  const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);
  const [columnTitle, setColumnTitle] = useState(["Todo"]);
  const [columns, setColumns] = useState([
    {
      title: "Todo",
      tasks: [
        {
          title: "Workout in the Gym",
          subtasks: ["Arm workout", "Leg workout"],
        },
      ],
    },
  ]);
  const [status, setStatus] = useState("Todo");
  const [columnItems, setColumnItems] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  function handleIncrement() {
    setNewColumnModalOpen(true);
    setFilterOpen(true);
  }

  function handleOpenNewTaskModal() {
    setNewTaskModalOpen(true);
    setFilterOpen(true);
  }

  function closeFilterAndModal() {
    setNewColumnModalOpen(false);
    setFilterOpen(false);
    setNewTaskModalOpen(false);
  }

  function onSubmit(data) {
    if (!data.title) return;
    setColumnTitle("");

    setNewColumnModalOpen(false);
    setFilterOpen(false);
    setColumnTitle([...columnTitle, data.title]);
    setColumns((prev) => [...prev, { title: data.title, tasks: [] }]);
    setCount((count) => count + 1);
    reset();
    console.log(columns);
    console.log(columnTitle);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
    console.log(status);
  }

  function onSubmitTask(data) {
    setColumnItems((prevItems) => [...prevItems, data]);

    setNewTaskModalOpen(false);
    setFilterOpen(false);
    console.log(columns);
    console.log(columnItems);
    handleSetColumns(data);
    reset();
  }

  function handleSetColumns(data) {
    console.log("Data received in handleSetColumns:", data); // Log received data
    setColumns((prevCols) => {
      const updatedColumns = prevCols.map((column, i) => {
        if (column.title === status) {
          console.log("Updating column:", column.title);
          console.log(`current number: ${i - 1}`);
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                title: data.title,
                subtasks: [data.subtasks1, data.subtasks2],
              },
            ],
          };
        }
        return column;
      });
      console.log("Updated columns:", updatedColumns); // Log the updated state
      return updatedColumns;
    });
  }

  // function handleSetColumns(data) {
  //   setColumns((prevCols) =>
  //     prevCols.map((column, i) =>
  //       column.title === status
  //         ? { ...column, tasks: [...column.tasks, data.desc] }
  //         : column
  //     )
  //   );
  //   console.log(columns);
  // }
  // console.log(columns);

  return (
    <taskContext.Provider
      value={{
        count,
        handleIncrement,
        taskContext,
        newColumnModalOpen,
        setNewColumnModalOpen,
        onSubmit,
        columnTitle,
        register,
        handleSubmit,
        reset,
        handleOpenNewTaskModal,
        newTaskModalOpen,
        filterOpen,
        closeFilterAndModal,
        onSubmitTask,
        columnItems,
        handleStatus,
        status,
        columns,
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
