import bitBookApi from '../shared/api';
import User from '../models/User';

class UserService {
    async fetchUsers() {
        const endpoint = '/users';
        const response = await bitBookApi.get(endpoint);

        const listOfUsers = response.data.map(user => new User(user));
        console.log(listOfUsers);
        return listOfUsers;
    }

    async fetchSingleUser(userId) {
        const endpoint = `/users/${userId}`;
        const response = await bitBookApi.get(endpoint);

        const userObj = new User(response.data);
        return userObj;
    }
}

export const userService = new UserService();