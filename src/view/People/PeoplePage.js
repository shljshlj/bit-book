import React from 'react';
import PeopleList from './PeopleList';
import SearchUsers from './SearchUsers';

const PeoplePage = () => {
    return (
        <div>
            <SearchUsers />
            <PeopleList />
        </div>
    );
}

export default PeoplePage;