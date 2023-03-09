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

    return db.execute(sql);
  }

  static async findAll() {
    let sql = `SELECT * FROM posts`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }
}

module.exports = Post;
