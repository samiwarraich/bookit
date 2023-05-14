import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.get(allRooms);
router.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRoom);

export default router.handler({ onError });
