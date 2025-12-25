import AuthLayout from "@/layouts/AuthLayout";
import useAuthStore from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;

    if (isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },

  component: AuthLayout,
});
