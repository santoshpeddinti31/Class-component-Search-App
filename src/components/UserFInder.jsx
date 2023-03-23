import React, { Component, Fragment } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";

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

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filterUser: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    //send the requests...

    this.setState({ filterUser: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filterUser: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filterUser} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterUser, setFilterUser] = useState(DUMMY_USERS);

//   useEffect(() => {
//     setFilterUser(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={styles.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filterUser} />
//     </Fragment>
//   );
// };

export default UserFinder;
