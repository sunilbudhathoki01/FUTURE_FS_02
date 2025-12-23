import express from "express";
import { upload } from "../../helper/cloudinary.js";
import {
  addProduct,
  deleteProducts,
  editProducts,
  fetchAllProducts,
  handleImageUpload,
} from "../../controllers/admin/productsController.js";
const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProducts);
router.delete("/delete/:id", deleteProducts);
router.get("/get", fetchAllProducts);

export default router;
