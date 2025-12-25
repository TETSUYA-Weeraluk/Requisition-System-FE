import AppSidebar from "@/components/side-bar/AppSidebar";
import { useTheme } from "@/components/theme/theme-hook";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Outlet } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";

const ProtectedLayout = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme as "dark" | "light");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <SidebarInset className="h-full">
          <header className="flex h-14 shrink-0 px-4 items-center gap-2 w-full">
            <div className="flex items-center gap-2 justify-between w-full">
              <SidebarTrigger className="-ml-1" />

              <Tabs defaultValue={theme}>
                <TabsList>
                  <TabsTrigger
                    value="light"
                    onClick={() => handleThemeChange("light")}
                    className={theme === "light" ? "text-primary" : ""}
                  >
                    <Sun />
                  </TabsTrigger>
                  <TabsTrigger
                    value="dark"
                    onClick={() => handleThemeChange("dark")}
                  >
                    <Moon />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 w-full h-full border-t">
            <Outlet />
          </div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
};
export default ProtectedLayout;
