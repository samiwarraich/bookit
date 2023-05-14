import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { forgotPassword } from "../../../controllers/authControllers";
import onError from "../../../middlewares/errors";

const router = createRouter();

dbConnect();

router.post(forgotPassword);

export default router.handler({ onError });
