import React from "react";
import CounterEmpty from "./CounterEmpty";
import CounterValue from "./CounterValue";
import Profile from "./Profile";
import UserList from "./UserLIst";
import UserListLoading from "./UserListLoading";
import UserListException from "./UserListException";
import MovieList from "./MovieList";
import UserProfile from "./UserProfile";
import PostList from "./PostList";
import TimerContainer from "./TImerContainer";

export const UseEffectBase = () => {
  return (
    <>
      <div>UseEffectBase</div>
      <CounterEmpty />
      <CounterValue />
      <Profile />
      <UserList />
      <UserListLoading />
      <UserListException />
      <MovieList />
      <UserProfile />
      <PostList />
      {/* <TimerContainer /> */}
      {/* console.log() 에 찍히는 것 때문에 주석처리 하겠음 */}
    </>
  );
};
