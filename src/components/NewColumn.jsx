import { useTasks } from "../utilities/useTasks";

function NewColumn() {
  const { handleIncrement } = useTasks();
  return (
    <div className="new-column">
      <p onClick={handleIncrement} className="new-btn">
        + New Column
      </p>
    </div>
  );
}

export default NewColumn;
