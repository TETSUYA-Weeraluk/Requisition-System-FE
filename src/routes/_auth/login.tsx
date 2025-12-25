import LoginPage from "@/pages/(Auth)/LoginPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login")({
  component: LoginPage,
});
