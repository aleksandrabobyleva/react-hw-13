import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "../components/UserList.module.css";


function UserList({ users, filter }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div c>
      <ul className={styles.listStyle}>
        {filteredUsers.map((user) => (
          <li key={user.id}>
           
            <UserItem user={user} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
