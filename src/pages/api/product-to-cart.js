import { getSession } from "next-auth/react";
import { createTransport } from "nodemailer";
import Users from "../../models/Users";

export default async function productToCart(req, res) {
  const session = await getSession({ req });
  const user = Users.findOne({ email: session.user.email });
  user.res.status(200).end();
}
