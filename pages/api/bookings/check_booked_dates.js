import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { checkBookedDatesOfRoom } from "../../../controllers/bookingControllers";
import onError from "../../../middlewares/errors";

const router = createRouter();

dbConnect();

router.get(checkBookedDatesOfRoom);

export default router.handler({ onError });
