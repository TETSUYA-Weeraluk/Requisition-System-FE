import LoginPage from "@/pages/(Auth)/LoginPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
  component: LoginPage,
});
