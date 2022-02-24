import React from "react";
import "../../App.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((data) => {
          return (
            <li
            id={window.location.pathname === data.link ? "active" : ""}
              className="row"
              key={data.icon}
              onClick={() => (window.location.pathname = data.link)}
            >
              <div id="icon">{data.icon}</div>
              <div id="title">{data.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
