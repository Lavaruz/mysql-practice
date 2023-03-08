const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();

    const createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
        INSERT INTO posts(title, body, created_at)
        VALUES('${this.title}','${this.body}','${createdAt}')
        `;

    const [newPosts, _] = await db.execute(sql);
    return newPosts;
  }

  static async findAll() {
    let sql = `
        SELECT * FROM posts`;

    const [newPosts, _] = await db.execute(sql);
    return newPosts;
  }
}

module.exports = Post;
