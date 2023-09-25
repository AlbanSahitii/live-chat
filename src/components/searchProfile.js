import React, { useState } from "react";
import Profiles from "./Profiles.js";

const SearchProfile = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState();

  const fetchUsername = (username) => {
    setTimeout(() => {
      const payload = {
        username: username,
      };
      fetch(`http://localhost:8080/user`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  };

  const onChange = (e) => {
    setUsername(e.target.value);
    if (username.length > 2) {
      fetchUsername(username);
    }
  };

  const handleDivClick = (userId) => {
    console.log(`Clicked on user with ID: ${userId}`);
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
        {users &&
          users.map((user) => {
            return <Profiles user={user} />;
          })}
      </div>
    </>
  );
};

export default SearchProfile;
