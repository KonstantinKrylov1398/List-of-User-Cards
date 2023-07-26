import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.css";
import { apiUser } from "src/api";
import { PrivateRoute } from "src/routes";
import { User } from "src/types";
import { Header, Main } from "./components";

export function UserPage() {
  const { userId } = useParams<{ userId: string }>();

  const [user, setUser] = useState<User.Entity>();

  useEffect(() => {
    const asyncUser = async () => {
      const response = await apiUser.get(userId);
      setUser(response.data);
    };

    asyncUser();
  }, [setUser]);

  return (
    <PrivateRoute>
      {user && (
        <div className={style.container}>
          <Header user={user} />
          <Main email={user.email} />
        </div>
      )}
    </PrivateRoute>
  );
}
