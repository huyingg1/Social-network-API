const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend, // Renamed from deleteFriend to be more consistent
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Use put instead of delete for removeFriend
router.route("/:userId/friends/:friendId").post(addFriend).put(removeFriend);

module.exports = router;
