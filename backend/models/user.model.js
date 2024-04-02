import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    refreshToken: {
      type: String,
    },
  },
  { timeStamp: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 10);
  return next;
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

export { User };
