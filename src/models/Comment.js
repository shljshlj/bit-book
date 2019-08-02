class Comment {
    constructor({ body, createdAt, id, postId, sid, userId }) {
        this.id = id;
        this.postId = postId;
        this.userId = userId;
        this.sid = sid;
        this.body = body;
        this.createdAt = createdAt;
    }
}

export default Comment;