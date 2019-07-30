class Post {
    constructor({ id, userId, createdAt, type}, content) {
        this.id = id;
        this.userId = userId;
        this.createAt = createdAt;
        this.type = type;
        this.content = content;
    }
}

export default Post;