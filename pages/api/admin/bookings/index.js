import { createRouter } from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { allAdminBookings } from "../../../../controllers/bookingControllers";
import onError from "../../../../middlewares/errors";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminBookings);

export default router.handler({ onError });
