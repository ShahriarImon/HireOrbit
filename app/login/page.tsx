// "use server"; // Mark this as a Server Action

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loginUser(formData: FormData) {
  "use server"; // Mark this function as a Server Action

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  //   try {
  const response = await fetch(`${"https://dummy-1.hiublue.com/api"}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  });

  // Perform the redirect outside the try-catch block
  redirect("/dashboard");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     // Perform the error redirect outside the try-catch block
  //     redirect("/login?error=Login failed");
  //   }
}
export default async function LoginPage() {
  return (
    <form action={loginUser}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
