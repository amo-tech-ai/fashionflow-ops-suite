import { Outlet } from "react-router-dom";
import { WebsiteHeader } from "./WebsiteHeader";
import { WebsiteFooter } from "./WebsiteFooter";

export function WebsiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <WebsiteHeader />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <WebsiteFooter />
    </div>
  );
}
