import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "",
    },
    skills: [{ type: String }],
    education: [
      {
        college: { type: String },
        degree: { type: String },
        fieldOfStudy: { type: String },
      },
    ],
    location: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    experience: [
      {
        title: { type: String },
        company: { type: String },
        discription: { type: String },
      },
    ],
    connection: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

export default User;
