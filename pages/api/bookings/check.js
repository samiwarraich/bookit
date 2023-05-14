import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { checkRoomBookingsAvailability } from "../../../controllers/bookingControllers";
import onError from "../../../middlewares/errors";

const router = createRouter();

dbConnect();

router.get(checkRoomBookingsAvailability);

export default router.handler({ onError });
