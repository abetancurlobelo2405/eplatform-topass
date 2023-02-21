import React from "react";
import { compare, hash } from "bcryptjs";
import { connectDB } from "../../../components/lib/connectDB";
import Users from "../../../models/Users";

connectDB();
export default async function signUp(req, res) {
  // only post method is accepted
  const { userData, generatedCode } = req.body;
  const { password1, email, code } = userData;

  if (req.method === "POST") {
    const checkCode = await compare(code, generatedCode);
    console.log(checkCode);
    // check verification email code
    if (!checkCode) {
      return res.status(400).json({ message: "El codigo es incorrecto." });
    }

    // check duplicate users
    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.status(422).json({ message: "Este usuario ya existe." });
    }

    // hash password
    Users.create(
      { email, password: await hash(password1, 12) },
      function (err, data) {
        if (err) return res.status(404).json({ err });
      }
    );

    res.status(201).json({ status: true });
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
