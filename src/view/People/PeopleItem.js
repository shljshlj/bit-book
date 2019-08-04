import React from 'react';
import { Link } from 'react-router-dom';

const PeopleItem = ({ user }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={user.avatarUrl} />
            </div>
            <div className="content">
                <Link to={`/people/${user.id}`} className="header">{user.getFullName()}</Link>
                <div className="meta">
                    <span>{user.about.job}</span>
                </div>
                <div className="description">
                    <p>{user.about.bio}</p>
                </div>
                <div className="extra">
                    Additional Details
                </div>
            </div>
        </div>
    );
};

export default PeopleItem;