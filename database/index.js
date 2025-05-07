const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("database/moons.sqlite", function (err) {
  if (err) console.log("Failed Connect: moons SQLite Database");
  else console.log("Successful Connect: moons SQLite Database");
});

async function getAllComments() {
  return new Promise((resolve, reject) => {
    db.all(`select * from userComments;`, function (err, rows) {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function addNewComment(commentData = {}) {
  return new Promise((resolve, reject) => {
    if (!commentData.comment) reject("Comment is required for new comment");
    db.run(
      `insert into userComments (comment) values ('${commentData.comment}');
      select * from userComments;`,
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
}

module.exports = {
  getAllComments,
  addNewComment,
};
