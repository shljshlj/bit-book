import bitBookApi from '../shared/api';

class PostService {
    async fetchPosts() {
        const response = await bitBookApi.get('./posts');
        console.log(response.data);
    }
}

export const postService = new PostService();