import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default function PrivateRoute(Component: () => Promise<ReactNode>) {
  return async function ProtectedRoute() {
    const token = (await cookies()).get("token")?.value;
    console.log("token23232:", token);

    if (!token) {
      redirect("/login");
    }

    return <Component />;
  };
}
