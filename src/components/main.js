import React, { Component } from "react";
import Chat from "./chat.js";
import SearchProfile from "./searchProfile.js";
import "./src/css/chat.css";
import "./src/css/search-profile.css";
import "./src/css/styles.css";

export default class main extends Component {
  render() {
    return (
      <>
        <SearchProfile />
        <Chat />
      </>
    );
  }
}
