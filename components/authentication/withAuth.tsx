"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useAuth } from "./AuthProvider";

import { ComponentType } from "react";

const withAuth = (Component: ComponentType) => {
  interface WithAuthProps {
    [key: string]: unknown;
  }

  const AuthenticatedComponent: React.FC<WithAuthProps> = (props) => {
    const pathname = usePathname();
    const router = useRouter();
    console.log("pathname:", pathname);
    const authInfo = useAuth();
    useLayoutEffect(() => {
      const token = localStorage.getItem("token");
      if (pathname !== "/login") {
        if (!token) {
          redirect("/login");
        }
      } else {
        if (token && authInfo.isAuthed) {
          router.push("/dashboard");
        }
      }
    }, [authInfo, pathname, router]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
