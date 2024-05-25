import PropTypes from "prop-types";

function ColumnItem({ children }) {
  return <div className="column_item">{children}</div>;
}

ColumnItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColumnItem;
