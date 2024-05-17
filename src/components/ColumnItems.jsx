import ColumnItem from "./ColumnItem";
import PropTypes from "prop-types";

function ColumnItems({ title }) {
  return (
    <div>
      <div className="items_heading">
        <div className="circle"></div>
        <p>{title} (15)</p>
      </div>
      <ColumnItem>
        <h2>Build UI for onboarding flow</h2>
        <p>1 of 3 sub tasks</p>
      </ColumnItem>
    </div>
  );
}

ColumnItems.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ColumnItems;
