import bitBookApi from '../shared/api';
import Post from '../models/Post';
import Comment from '../models/Comment';
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
            const publicComments = comments.filter(comment => comment.isPublic);
            const commentsNum = publicComments ? publicComments.length : null;

            return new Post(post, content, commentsNum);
        });

        // console.log(listOfPosts);
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

    async fetchSinglePostComments(postId) {
        const endpoint = `/posts/${postId}/comments`;
        const response = await bitBookApi.get(endpoint);

        const listOfComments = response.data.map(comment => new Comment(comment));
        
        return listOfComments;
    }
}

export const postService = new PostService();