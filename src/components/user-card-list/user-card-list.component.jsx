import React from 'react';

import './user-card-list.styles.css';
import { UserCard } from '../user-card/user-card.component';

export const UserCardList = props => {
    return (
    <div className="user-card-list">
        {props.users.map(user => (
          <UserCard key={user.login.uuid} user={user}></UserCard>
        ))}
    </div>
    )
}