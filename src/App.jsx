import Filter from "./components/Filter";
import UserList from "./components/UserList";
import "./App.css";

export default function App() {
  return (
    <div className="container" >
      <h1 className="title"> Список пользователей</h1>
     <div className="box">
     <Filter />
     <UserList />
     </div>
    </div>
  );
}
