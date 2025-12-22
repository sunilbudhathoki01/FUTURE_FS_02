import { Product } from "../../models/product.js";

export const getFilteredProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(500).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "some error occured",
    });
  }
};
