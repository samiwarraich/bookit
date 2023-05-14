import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.get(getSingleRoom);
router.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateRoom);
router.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteRoom);

export default router.handler({ onError });
