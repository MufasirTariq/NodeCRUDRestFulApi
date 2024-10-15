const express = require('express');
const [fetch, create, update, remove, search] = require("../controller/userController.js")

const router = express.Router()

router.get("/", fetch);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

router.get('/search/:id', search)

module.exports = router