import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.css";
import { apiUser } from "src/api";
import { PrivateRoute } from "src/routes";
import { User } from "src/types";
import { Header, Main } from "./components";

type Props = {
  userId: string;
};

export function UserPage() {
  const { userId } = useParams<Props>();

  const [user, setUser] = useState<User.Entity>({
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  useEffect(() => {
    const asyncUser = async () => {
      const response = await apiUser.getUser(userId ? userId : "");
      setUser(response.data);
    };

    asyncUser();
  }, [setUser]);

  return (
    <PrivateRoute>
      <div className={style.container}>
        <Header user={user} />
        <Main user={user} />
      </div>
    </PrivateRoute>
  );
}
