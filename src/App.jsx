import React from "react";
import UserFinder from "./components/UserFInder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  {
    id: "01",
    name: "santosh ",
  },
  {
    id: "02",
    name: "santhi ",
  },
  {
    id: "03",
    name: "bharathi ",
  },
  {
    id: "04",
    name: "mahesh ",
  },
];

const App = () => {
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
};

export default App;
