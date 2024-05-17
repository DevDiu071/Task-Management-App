import { NavLink } from "react-router-dom";
import { TbLayoutBoardSplit } from "react-icons/tb";

function SideBar() {
  return (
    <div className="sidebar">
      <img src="/taskflow.png" alt="logo" className="logo" />

      <p className="all-boards">All Boards (8)</p>
      <nav className="navigation">
        <ul>
          <li className="activated">
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink className="link" to="/">
              Platform lunch
            </NavLink>
          </li>
          <li>
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink className="link" to="/marketing">
              Marketing plan
            </NavLink>
          </li>
          <li>
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <NavLink className="link" to="/road_map">
              Road map
            </NavLink>
          </li>
          <li>
            <span className="icon">
              <TbLayoutBoardSplit />
            </span>
            <p>Create New Board</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
