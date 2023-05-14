import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { stripeCheckoutSession } from "../../../controllers/paymentControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).get(stripeCheckoutSession);

export default router.handler({ onError });
