import { createRouter } from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { allAdminUsers } from "../../../../controllers/authControllers";
import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminUsers);

export default router.handler({ onError });
