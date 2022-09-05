import React from "react";
import UserList from "../../../components/user-list/User-list";

interface PageBackOfficeUsersProps {}

const PageBackOfficeUsers: React.FunctionComponent<PageBackOfficeUsersProps> = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default PageBackOfficeUsers;
