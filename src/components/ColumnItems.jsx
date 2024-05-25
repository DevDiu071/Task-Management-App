import ColumnItem from "./ColumnItem";
import PropTypes from "prop-types";

function ColumnItems({ column }) {
  return (
    <div>
      <div className="items_heading">
        <div className="circle"></div>
        <p>
          {column.title} ({column.tasks.length})
        </p>
      </div>
      {column.tasks.map((task) => (
        <ColumnItem key={Math.random()}>
          <h2>{task.title}</h2>
          <p>1 of {task.subtasks.length} sub tasks</p>
        </ColumnItem>
      ))}
    </div>
  );
}

ColumnItems.propTypes = {
  column: PropTypes.object.isRequired,
};

export default ColumnItems;
