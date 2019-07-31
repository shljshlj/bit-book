class Post {
    constructor({ id, userId, sid, createdAt, type}, content, commentsNum) {
        this.id = id;
        this.userId = userId;
        this.sid = sid;
        this.createAt = createdAt;
        this.type = type;
        this.content = content;
        this.commentsNum = commentsNum;
    }
}

export default Post;