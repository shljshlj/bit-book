import React from 'react';

const ProfileStats = (props) => {
    return (
        <div className="ui two statistics">
            <div className="statistic">
                <div className="value">
                    22
                </div>
                <div className="label">
                    Posts
                </div>
            </div>
            <div className="statistic">
                <div className="value">
                    3
                </div>
                <div className="label">
                    Comments
                </div>
            </div>
        </div>
    );
};

export default ProfileStats;