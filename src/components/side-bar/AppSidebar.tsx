import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import AppSidebarHeader from "./AppSidebarHeader";
import { BookA, ChevronRight, Settings } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import AppSidebarFooter from "./AppSIdebarFooter";

const AppSidebar = () => {
  const menuFeatures = [
    {
      title: "Products",
      url: "#",
      icon: <BookA />,
    },
  ];

  const menuSettings = {
    title: "Settings",
    url: "#",
    icon: <Settings />,
    items: [
      {
        title: "User",
        url: "#",
      },
      {
        title: "Role",
        url: "#",
      },
      {
        title: "Permission",
        url: "#",
      },
    ],
  };

  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{menuFeatures[0].title}</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={menuFeatures[0].title}>
                {menuFeatures[0].icon && menuFeatures[0].icon}
                <span>{menuFeatures[0].title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Manage</SidebarGroupLabel>
          <SidebarMenu>
            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={menuSettings.title}>
                    {menuSettings.icon && menuSettings.icon}
                    <span>{menuSettings.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menuSettings.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  );
};
export default AppSidebar;
