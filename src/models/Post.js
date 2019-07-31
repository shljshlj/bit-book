class Post {
    constructor({ id, userId, sid, createdAt, type}, content) {
        this.id = id;
        this.userId = userId;
        this.sid = sid;
        this.createAt = createdAt;
        this.type = type;
        this.content = content;
    }
}

export default Post;