import mongoose, { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  shops: [{ type: Object }],
  savedProducts: [{ type: Object }],
  boughtProducts: [{ type: Object }],
  shoppingCartProducts: [{ type: Object }],
});

const Users = models.Users || model("Users", UserSchema);
export default Users;
