import { createRouter } from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import {
  getUserDetails,
  deleteUser,
  updateUser,
} from "../../../../controllers/authControllers";
import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUserDetails);
router.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);
router.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteUser);

export default router.handler({ onError });
