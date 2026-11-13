import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "./events";

export function InteractionAnalytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) {
        const service = url.hostname.includes("linkedin.com")
          ? "linkedin"
          : url.hostname.includes("github.com")
            ? "github"
            : url.hostname === "open.spotify.com"
              ? "spotify"
              : "other";
        trackEvent("outbound_link", { service });
      } else {
        trackEvent("navigation_click", {
          destination: url.pathname,
          placement: link.classList.contains("page-flow")
            ? "page_flow"
            : link.closest("header")
              ? "header"
              : link.closest("footer")
                ? "footer"
                : "content",
        });
        if (link.classList.contains("project-card"))
          trackEvent("project_open", {
            project: url.pathname.split("/").pop() || "unknown",
          });
        if (url.hash)
          trackEvent("anchor_click", { section: url.hash.slice(1) });
      }
    };
    const toggle = (event: Event) => {
      if (event.target instanceof HTMLDetailsElement)
        trackEvent("details_toggle", { expanded: event.target.open });
    };
    document.addEventListener("click", click);
    document.addEventListener("toggle", toggle, true);
    return () => {
      document.removeEventListener("click", click);
      document.removeEventListener("toggle", toggle, true);
    };
  }, []);
  useEffect(() => {
    const milestones = new Set<number>();
    const scroll = () => {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const percent = Math.min(
        100,
        Math.round((window.scrollY / available) * 100),
      );
      for (const threshold of [25, 50, 75, 100])
        if (percent >= threshold && !milestones.has(threshold)) {
          milestones.add(threshold);
          trackEvent("reading_progress", { percent: threshold });
        }
    };
    window.addEventListener("scroll", scroll, { passive: true });
    const seen = new Set<string>();
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            (entries) => {
              for (const entry of entries)
                if (entry.isIntersecting && !seen.has(entry.target.id)) {
                  seen.add(entry.target.id);
                  trackEvent("section_view", { section: entry.target.id });
                }
            },
            { threshold: 0, rootMargin: "-20% 0px -20% 0px" },
          );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer?.observe(section));
    return () => {
      window.removeEventListener("scroll", scroll);
      observer?.disconnect();
    };
  }, [pathname]);
  return null;
}
