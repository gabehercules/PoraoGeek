import { NextResponse } from "next/server";

export async function POST() {
  //   const users = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const usersList = await users.json();

  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/auth/local/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "gabrielsyze@gmail.com",
        password: "Gh060799@2018",
      }),
    }
  );

  const userAuth = await response.json();
  return NextResponse.json({ message: userAuth });
}
