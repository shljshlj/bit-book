import axios from 'axios';
// import bitBookApi from '../shared/api';
import User from '../models/User';

import { apiService } from '../shared/api';

// class UserService {
//     async fetchUsers() {
//         const endpoint = '/users';
//         const response = await bitBookApi.get(endpoint);

//         const listOfUsers = response.data.map(user => new User(user));
//         return listOfUsers;
//     }

//     async fetchSingleUser(userId) {
//         const endpoint = `/users/${userId}`;
//         const options = {
//             params: {
//                 _embed: ["posts", "comments"]
//             }
//         }
//         const response = await bitBookApi.get(endpoint, options);

//         const numOfPosts = response.data.posts.length;
//         const numOfComments = response.data.comments.length;
//         const userObj = new User(response.data, numOfPosts, numOfComments);
        
//         return userObj;
//     }

//     async fetchMultipleUsers(arrayOfUserIds) {
//         const response = await axios.all(arrayOfUserIds.map(id => userService.fetchSingleUser(id)));
//         return response;
//     }
// }

class UserService {
    async fetchUsers() {
        const response = await apiService.get('/users');
        
        return response.map(user => new User(user));
    }

    async fetchSingleUser(userId) {
        const params = {
            _embed: ['posts', 'comments']
        }

        const response = await apiService.get(`/users/${userId}?_embed=posts&_embed=comments`);

        const numOfPosts = response.posts.length;
        const numOfComments = response.comments.length;
        const userObj = new User(response, numOfPosts, numOfComments);
        
        return userObj;
    }

    async fetchMultipleUsers(arrayOfUserIds) {
        return await Promise.all([...arrayOfUserIds.map(id => this.fetchSingleUser(id))]);
    }
}

export const userService = new UserService();