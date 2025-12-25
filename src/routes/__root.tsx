import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="tetsuya-theme">
      <Outlet />
      <Toaster />
    </ThemeProvider>
  );
}
