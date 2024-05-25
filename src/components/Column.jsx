import { useTasks } from "../utilities/useTasks";
import ColumnItems from "./ColumnItems";
import PropTypes from "prop-types";

function Column({ column }) {
  const { columnItems } = useTasks();

  return (
    <div className={`${columnItems.length > 0 ? "" : "column-empty"} column`}>
      <ColumnItems column={column} />
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Column;
