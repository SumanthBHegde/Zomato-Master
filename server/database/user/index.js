import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async (email, phoneNumber) => {
  //check whether the email already exists
  const checkUserByEmail = await UserModel.findOne({ email });

  //check whether the phonenumber already exists
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });
  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exist");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async (email, password) => {
  //check whether the email exists
  const user = await UserModel.findOne({ email });

  //thro error when incorrect user
  if (!user) throw new Error("User doesnot exist");

  //compare the pass
  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) {
    throw new Error("Invalid Password");
  }

  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  //pass check not modified
  if (!user.isModified("password")) return next();

  //gen bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    //hashing pass
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      //assign pass
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("Users", UserSchema);
