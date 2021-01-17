import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import {
  MoreVert,
  DonutLargeOutlined,
  SearchOutlined
} from "@material-ui/icons";
import Sidechat from "./Sidechat.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmemPrYDUM0OoFV4aQHnFHlTdI8DTtAINB_g&usqp=CAU" />
        </IconButton>
        <div className="sidebar_headerRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="search here" />
        </div>
      </div>

      <div className="sidebar_chat">
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
        <Sidechat />
      </div>
    </div>
  );
}
export default Sidebar;
