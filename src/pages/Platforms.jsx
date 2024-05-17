import Column from "../components/Column";
import Header from "../components/Header";
import NewColumn from "../components/NewColumn";
import { useTasks } from "../utilities/useTasks";

function Platforms() {
  const { count, columnTitle } = useTasks();
  console.log(count);
  return (
    <div className="platforms">
      <Header />
      <div className="align-columns">
        <div className="columns">
          {/* {Array.from({ length: count }, () => (
            <Column />
          ))} */}
          {columnTitle.map((title) => (
            <Column key={Math.random()} title={title} />
          ))}
        </div>
        <NewColumn />
      </div>
    </div>
  );
}

export default Platforms;
