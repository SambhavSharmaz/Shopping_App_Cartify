const { Product } = require("../../../Models/product_schema.js");

const createProdController = async (req, res) => {
  try {
    const data = req.body;
    console.log("Creating product...", data);

    Object.keys(data).forEach((key) => {
      if(data[key] === "" || data[key] === undefined || data[key] === null){
        delete data[key];
      }
    })

    const createdProduct = await Product.create(data);

    return res.status(200).json({
      isSuccess: true,
      message: "Product created successfully",
      data: {
        product: createdProduct,
      },
    });
  } catch (err) {
    console.error("Error creating product", err);

    return res.status(400).json({
      isSuccess: false,
      message: "Error creating product",
      data: null,
    });
  }
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            isSuccess: true,
            message: "Product list fetched!",
            data: {
                products: allProducts,
            },
        });
    } catch (err) {
        console.log("🔴 Error in getALlProducts -->", err.message);
        res.status(500).json({ isSuccess: false, message: "Internal Server Error", data: {} });
    }
};

const updateProdController = async (req, res) => {
  try {
    const prodId = req.params.prodId;
    const newdata = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(prodId, newdata, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(400).json({
        isSuccess: false,
        message: "Product not found",
        data: null,
      });
    }

    return res.status(200).json({
      isSuccess: true,
      message: "Product updated successfully",
      data: {
        product: updatedProduct,
      },
    });
  } catch (err) {
    console.log("Error updating product", err);
    return res.status(500).json({
      isSuccess: false,
      message: "Error updating product",
      data: null,
    });
  }
};

const deleteProdController = async (req, res) => {
  try {
    const prodId = req.params.prodId;

    const deletedProduct = await Product.findByIdAndDelete(prodId);

    if (!deletedProduct) {
      return res.status(400).json({
        isSuccess: false,
        message: "Product not found",
        data: null,
      });
    }

    return res.status(200).json({
      isSuccess: true,
      message: "Product deleted successfully",
      data: {
        product: deletedProduct,
      },
    });
  } catch (err) {
    console.log("Error deleting product", err);
    return res.status(500).json({
      isSuccess: false,
      message: "Error deleting product",
      data: null,
    });
  }
};

module.exports = {
  createProdController,
  getAllProducts,
  updateProdController,
  deleteProdController,
};
