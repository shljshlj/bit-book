class User {
    constructor({ id, sid, email, createdAt, avatarUrl, name, about }) {
        this.id = id;
        this.sid = sid;
        this.email = email;
        this.createdAt = createdAt;
        this.avatarUrl = avatarUrl;
        this.name = name;
        this.about = about;
    }

    getFullName() {
        return this.name.first + ' ' + this.name.last;
    }
}

export default User;