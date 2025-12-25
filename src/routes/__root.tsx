import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="tetsuya-theme">
      <Outlet />
    </ThemeProvider>
  );
}
