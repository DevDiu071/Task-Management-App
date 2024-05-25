import Column from "../components/Column";
import Header from "../components/Header";
import NewColumn from "../components/NewColumn";
import { useTasks } from "../utilities/useTasks";

function Platforms() {
  const { count, columnTitle, columns } = useTasks();

  return (
    <div className="platforms">
      <Header />
      <div className="align-columns">
        <div className="columns">
          {columns.map((column) => (
            <Column key={Math.random()} column={column} />
          ))}
          {/* {columnTitle.map((title) => (
            <Column key={Math.random()} title={title} />
          ))} */}
        </div>
        <NewColumn />
      </div>
    </div>
  );
}

export default Platforms;
