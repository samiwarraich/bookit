import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getBookingDetails } from "../../../controllers/bookingControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser).get(getBookingDetails);

export default router.handler({ onError });
