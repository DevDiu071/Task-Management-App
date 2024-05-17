import { createContext, useContext } from "react";

const taskContext = createContext();

function useTasks() {
  const context = useContext(taskContext);
  if (context === undefined || context === null)
    throw new Error("TaskContext was used outside of the TaskProvider context");
  return context;
}

export { taskContext, useTasks };
