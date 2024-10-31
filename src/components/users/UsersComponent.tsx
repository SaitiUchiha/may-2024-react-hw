import React, {useEffect} from "react";
import {useStore} from "../../store";
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import UserComponent from "../user/UserComponent";


const UsersComponent = () => {

    let {userSlice: {allUsers, loadUsers}} = useStore();
    useEffect(() => {
        getUsers().then(value => loadUsers(value));
    }, []);

  return (
      <div>
          {
              allUsers.map((user: IUser) =><UserComponent key={user.id} user={user}/>)
          }
      </div>

  )
}

export default UsersComponent;