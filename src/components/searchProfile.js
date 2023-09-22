import React, { useState } from "react";

const SearchProfile = () => {
  const [username, setUsername] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  return (
    <>
      <div className="search-profile-div">
        <input
          name="username"
          className="username-search-page"
          value={username}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SearchProfile;
