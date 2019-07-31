import bitBookApi from '../shared/api';
import Post from '../models/Post';
import { validationService } from './ValidatonService';

class PostService {
    async fetchPosts() {
        const response = await bitBookApi.get('./posts?_embed=comments');

        const listOfPosts = response.data.map(post => {
            const { videoUrl, imageUrl, text } = post;
            const validVideoUrl = validationService.validateVideoUrl(videoUrl);
            const content = validVideoUrl ? validVideoUrl : imageUrl ? imageUrl : text;
            const commentsNum = post.comments.length;
            
            return new Post(post, content, commentsNum);
        });

        return listOfPosts;
    }
}

export const postService = new PostService();