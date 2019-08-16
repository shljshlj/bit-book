import React from 'react';

const ProfileStats = ({ numOfPosts, numOfComments}) => {
    return (
        <div className="ui two statistics">
            <div className="statistic">
                <div className="value">
                {numOfPosts}
                </div>
                <div className="label">
                    Posts
                </div>
            </div>
            <div className="statistic">
                <div className="value">
                    {numOfComments}
                </div>
                <div className="label">
                    Comments
                </div>
            </div>
        </div>
    );
};

export default ProfileStats;