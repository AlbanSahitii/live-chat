import React, { Component } from "react";
import Chat from "./chat.js";
import SearchProfile from "./searchProfile.js";

export default class main extends Component {
  render() {
    return (
      <>
        <Chat />
        <SearchProfile />
      </>
    );
  }
}
