const express = require("express");
const router = express.Router();
const walletController = require("../controllers/wallet.controller");
const verifyUser=require("../Utills/verifyUser")
const {permittedTo} =require("../Utills/premittedTo");
router.use(verifyUser);

router.route("/balance")
  .get(permittedTo(["client","caregiver"]), walletController.getWalletBalance);

router.route("/deposit")
  .post(permittedTo(["client","caregiver"]), walletController.deposit);

router.route("/pay")
  .post(permittedTo(["client","caregiver"]), walletController.pay);

router.route("/refund")
  .post(permittedTo(["client","caregiver"]), walletController.refund);

module.exports=router;
//