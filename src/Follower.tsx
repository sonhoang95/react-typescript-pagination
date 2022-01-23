import React from 'react';
import { IFollower } from './App';

type FollowerProps = IFollower;

const Follower = ({ login, html_url, avatar_url }: FollowerProps) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        View profile
      </a>
    </article>
  );
};

export default Follower;
