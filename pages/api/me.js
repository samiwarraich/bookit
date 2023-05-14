import { createRouter } from "next-connect";
import dbConnect from "../../config/dbConnect";
import { currentUserProfile } from "../../controllers/authControllers";
import { isAuthenticatedUser } from "../../middlewares/auth";
import onError from "../../middlewares/errors";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).get(currentUserProfile);

export default router.handler({ onError });
