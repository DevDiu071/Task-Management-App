import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Platforms from "../pages/Platforms";
import Marketing from "../pages/Marketing";
import RoadMap from "../pages/RoadMap";

function AppLayout() {
  return (
    <div className="applayout">
      <SideBar />

      <div className="mainpage">
        <Routes>
          <Route path="/" element={<Platforms />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="road_map" element={<RoadMap />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default AppLayout;
