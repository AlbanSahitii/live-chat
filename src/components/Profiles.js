import React from "react";
const Profiles = (user) => {
  return (
    <>
      <div className="profiles-div">
        <i>{user.user.username}</i>
        <button key={user.user._id} id={user.user._id}>
          Message
        </button>
      </div>
    </>
  );
};

export default Profiles;
