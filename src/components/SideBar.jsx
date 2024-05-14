import { NavLink } from "react-router-dom";
import { TbLayoutBoardSplit } from "react-icons/tb";

function SideBar() {
  return (
    <div className="sidebar">
      <h1 className="logo">TaskTrackr</h1>

      <p className="all-boards">All Boards (8)</p>
      <nav className="navigation">
        <ul>
          <li className="activated">
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink to="/">Platform lunch</NavLink>
          </li>
          <li>
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink to="/marketing">Marketing plan</NavLink>
          </li>
          <li>
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink to="/road_map">Road map</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
