import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { createRoomReview } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).put(createRoomReview);

export default router.handler({ onError });
