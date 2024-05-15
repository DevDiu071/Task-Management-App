import ColumnItem from "./ColumnItem";

function ColumnItems() {
  return (
    <div>
      <div className="items_heading">
        <div className="circle"></div>
        <p>Todo (15)</p>
      </div>
      <ColumnItem />
      <ColumnItem />
      <ColumnItem />
      <ColumnItem />
    </div>
  );
}

export default ColumnItems;
