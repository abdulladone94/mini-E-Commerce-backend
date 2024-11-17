import Product from "../models/product.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  } catch (err) {
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const getAllProducts = await Product.find();
    res.status(200).json(getAllProducts);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const getProductById = await Product.findById(req.params.id);
    res.status(200).json(getProductById);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const editProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(editProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    next(err);
  }
};
