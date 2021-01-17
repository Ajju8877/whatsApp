import React from "react";
import "./Sidechat.css";
import { Avatar, IconButton } from "@material-ui/core";

function Sidechat() {

  return (
    <div className="sidechat">
      <Avatar />
      <div className="sidechat_info">
        <h1> Room Name </h1>
        <p> Last Message... </p>
      </div>
    </div>
  );
}

export default Sidechat;
