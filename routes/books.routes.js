const express = require("express");
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

const bookController = require('../controllers/books.controllers');

router.get("/",checkAuth, bookController.getAll);
router.post("/add",bookController.addBook);
// router.get("/:_id",bookController.getSingleBook);
// router.put("/:_id", bookController.updateBook);
// router.delete("/:_id", bookController.deleteBook);


module.exports = router;