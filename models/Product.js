import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true, // Ensures SKU is unique for each product
    },
    productName: {
      type: String,
      required: true, // Product name is mandatory
      trim: true, // Removes whitespace from the beginning and end
    },
    images: {
      type: [String], // Array of strings to store multiple image URLs
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0; // Ensures there is at least one image
        },
        message: "There must be at least one image",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, // Ensures quantity is non-negative
      default: 0, // Defaults to zero if not provided
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

export default mongoose.model("Product", ProductSchema);
