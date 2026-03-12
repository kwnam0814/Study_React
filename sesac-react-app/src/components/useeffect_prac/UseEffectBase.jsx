import React from "react";
import CounterEmpty from "./CounterEmpty";
import CounterValue from "./CounterValue";
import Profile from "./Profile";
import UserList from "./UserLIst";
import UserListException from "./UserListException";
import UserListLoading from "./UserListLoading";

export const UseEffectBase = () => {
  return (
    <>
      <div>UseEffectBase</div>
      <CounterEmpty />
      <CounterValue />
      <Profile />
      <UserList />
      <UserListException />
      <UserListLoading />
    </>
  );
};
