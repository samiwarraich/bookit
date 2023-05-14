import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { updateProfile } from "../../../controllers/authControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).put(updateProfile);

export default router.handler({ onError });
