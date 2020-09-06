const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    main_image: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = Category = mongoose.model("Category", CategorySchema);
