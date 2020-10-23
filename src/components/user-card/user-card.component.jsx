import React from 'react';

import './user-card.styles.css';

export const UserCard = props => {
    return (
        <div className="card-container">
            <img alt="userpicture" src={props.user.picture.large} />
            <h2 key={props.user.id.name}>{props.user.name.first +' '+ props.user.name.last}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}