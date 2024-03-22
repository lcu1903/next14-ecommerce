"use server";
import { redirect } from "next/navigation";
import User from "../../schema/UserSchema";
import connectToDB from "../../utils";
import { UserType } from "../../definition";

//add user
export async function addUser(formData: FormData) {
  connectToDB();
  const rawData = {
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("tel"),
    role: formData.get("role"),
  };
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(rawData),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const user = new User(rawData);
    await user.save();
    redirect("/admin/users");
  } else {
    return Error("Failed to add user");
  }
}
//get all user with res
export async function getAllUser() {
  connectToDB();
  try {
    const data: UserType[] = await User.find({});
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product table.");
  }
}

//get filtered user
export async function getFilteredUser(query: string) {
  connectToDB();
  try {
    const data: UserType[] = await User.find({
      $or: [{ name: query }, { username: query }],
    });
    const res = await fetch(`http://localhost:3000/api/users?${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product table.");
  }
}
//get user by id
export async function getUserById(id: string) {
  connectToDB();
  try {
    const data = await User.findOne({ _id: id });
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      return JSON.parse(JSON.stringify(data));
    } else {
      return Error("Failed to get user");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user profile.");
  }
}
