import React, { Component } from 'react';
import PeopleItem from './PeopleItem';
import { userService } from '../../services/userService';

class PeopleList extends Component {
    state = { users: [] }

    fetchUsers = async () => {
        const users = await userService.fetchUsers();
        this.setState({ users });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { users } = this.state;
        return (
            <div className="ui items">
                {users.map(user => <PeopleItem key={user.sid} user={user} />)}
            </div>
        );
    }
};

export default PeopleList;