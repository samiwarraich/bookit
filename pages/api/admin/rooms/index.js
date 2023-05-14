import { createRouter } from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { allAdminRooms } from "../../../../controllers/roomControllers";
import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminRooms);

export default router.handler({ onError });
