import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      try {
        window.history.scrollRestoration = "manual";
      } catch {}
    }
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      // Fallbacks for iOS Safari
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    // Next frame to ensure route content has rendered
    requestAnimationFrame(scrollTop);
    setTimeout(scrollTop, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-28 md:pt-28">
        <ScrollToTop />
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
