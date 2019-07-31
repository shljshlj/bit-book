import bitBookApi from '../shared/api';
import Post from '../models/Post';

class PostService {
    async fetchPosts() {
        const response = await bitBookApi.get('./posts');

        return response.data.map(post => {
            const { videoUrl, imageUrl, text } = post;
            const content = videoUrl ? videoUrl : imageUrl ? imageUrl : text;
            
            return new Post(post, content);
        });
    }
}

export const postService = new PostService();