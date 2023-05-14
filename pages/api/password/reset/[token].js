import { createRouter } from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { resetPassword } from "../../../../controllers/authControllers";
import onError from "../../../../middlewares/errors";

const router = createRouter();

dbConnect();

router.put(resetPassword);

export default router.handler({ onError });
