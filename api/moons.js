const router = require("express").Router();
const { getAllComments } = require("../database");
const { addNewComment } = require("../database");

router.get("/test/:userId", function (req, res) {
  res.status(200).json({ msg: "Success", userId: req.params.userId });
});

router.post("/moons/new", async function (req, res) {
  const newComment = await addNewComment({ comment: req.body.comment });
  res.status(200).json({ newId: newComment, inputData: req.body });
});

// router.get("/moons/all", async function (req, res) {
//   const allComments = await getAllComments();
//   res.status(200).json({ comments: allComments, total: allComments.length });
// });

module.exports = router;
