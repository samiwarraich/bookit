import { createRouter } from "next-connect";
import dbConnect from "../../config/dbConnect";
import { webhookCheckout } from "../../controllers/paymentControllers";
import onError from "../../middlewares/errors";

const router = createRouter();

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

router.post(webhookCheckout);

export default router.handler({ onError });
