import ColumnItems from "./ColumnItems";
import PropTypes from "prop-types";

function Column({ title }) {
  return (
    <div>
      <ColumnItems title={title} />
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Column;
