import React, {FC, useEffect, useState} from "react";
import IUser from "../components/models/IUser";
import { useParams} from "react-router-dom";
import {getUser} from "../services/api.services";
import UserLong from "../components/user/UserLong";



const UserFull:FC = () => {
        let {id} = useParams();
        const [user, setUser] = useState<IUser| null>(null);
        useEffect(() => {
                if (id){
                        getUser(id).then(value => setUser(value));
                }
        }, []);
  return (
      <div>
              {user.map((user: IUser, index) =>
                  <UserLong obj={user}/>)}
      </div>
)
        ;
};

export default UserFull;