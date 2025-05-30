import jwt from "jsonwebtoken";

import userModel from "../models/user.model.js";
import CustomError from "../errors/customError.js";

export const signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    //if password is not provided
    if(!password){
      throw new CustomError("Password is required", 400);
    }

    //create new user
    const user = await userModel.create({ name, email, password, role });

    const jwtToken = jwt.sign({user: { id: user._id, name: user.name, email: user.email }}, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", jwtToken, { httpOnly: true });
    // send response
    res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new CustomError("User not found", 404);
    } else if (!(await user.comparePassword(password))) {
      throw new CustomError("Incorrect Password", 401);
    }

    const jwtToken = jwt.sign({user: { id: user._id, name: user.name, email: user.email }}, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", jwtToken, { httpOnly: true });

    res.status(200).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Signout successfully",
  });
}