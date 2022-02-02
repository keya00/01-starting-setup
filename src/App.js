import React,{ useState } from 'react';
import Addusers from "./components/Users/Addusers";
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);

  const onAddUserHandler=(userName, userAge)=>{
    setUsersList((prevState)=>{
      return[...prevState,{name:userName, age:userAge}]}
    )
  }
  return (
    <div>
      <Addusers onAddUser={onAddUserHandler} />
      <UsersList list={usersList}/>
    </div>
  );
}
 
export default App;
