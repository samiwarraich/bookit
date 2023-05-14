import { createRouter } from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { registerUser } from "../../../controllers/authControllers";
import onError from "../../../middlewares/errors";

const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler({ onError });
