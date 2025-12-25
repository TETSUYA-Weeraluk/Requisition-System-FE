import ProtectedLayout from "@/layouts/ProtectedLayout";
import useAuthStore from "@/stores/auth-store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;

    if (!isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },

  component: ProtectedLayout,
});
