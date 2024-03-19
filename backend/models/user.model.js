import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    RefreshToken: {
      type: String,
    },
  },
  { timeStamp: true }
);

const User = mongoose.model("User", UserSchema);

export { User };
