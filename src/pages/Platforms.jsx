import Column from "../components/Column";
import Header from "../components/Header";
import NewColumn from "../components/NewColumn";

function Platforms() {
  return (
    <div className="platforms">
      <Header />
      <div className="align-columns">
        <div className="columns">
          <Column />
          <Column />
          <Column />
        </div>
        <NewColumn />
      </div>
    </div>
  );
}

export default Platforms;
