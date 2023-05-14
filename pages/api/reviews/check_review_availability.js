import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { checkReviewAvailability } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).get(checkReviewAvailability);

export default router.handler({ onError });
