import bitBookApi from '../shared/api';
import Post from '../models/Post';
import { validationService } from './validatonService';

class PostService {
    async fetchPosts() {
        const endpoint = '/posts';
        const options = {
            params: {
                _embed: "comments",
                _sort: "createdAt,id",
                _order: "desc,desc"
            }
        }
        const response = await bitBookApi.get(endpoint, options);

        const listOfPosts = response.data.map(post => {
            const { videoUrl, imageUrl, text, comments } = post;
            const validVideoUrl = validationService.validateVideoUrl(videoUrl);
            const content = validVideoUrl ? validVideoUrl : imageUrl ? imageUrl : text;
            const commentsNum = comments ? comments.length : null;

            return new Post(post, content, commentsNum);
        });

        console.log(listOfPosts);
        return listOfPosts;
    }

    async fetchSinglePost(postId) {
        const endpoint = `/posts/${postId}`;
        const { data } = await bitBookApi.get(endpoint);

        const { videoUrl, imageUrl, text, comments } = data;
        const validVideoUrl = validationService.validateVideoUrl(videoUrl);
        const content = validVideoUrl ? validVideoUrl : imageUrl ? imageUrl : text;
        const commentsNum = comments ? comments.length : null;

        return new Post(data, content, commentsNum);
    }

    async fetchComments(postId) {
        const endpoint = `/posts/${postId}/comments`;
        const response = await bitBookApi.get()
    }
}

export const postService = new PostService();