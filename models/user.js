const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "student",
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    token: {
      type: String,
    },
    is_verified: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
