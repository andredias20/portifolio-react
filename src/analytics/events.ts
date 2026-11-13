type EventValue = string | number | boolean;
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };

/** Only controlled identifiers: never send terminal text or arbitrary user input. */
export function trackEvent(
  name: string,
  properties: Record<string, EventValue> = {},
) {
  if (!import.meta.env.PROD || typeof window === "undefined") return;
  try {
    (window as AnalyticsWindow).gtag?.("event", name, {
      page_path: window.location.pathname,
      ui_language: document.documentElement.lang,
      ...properties,
      transport_type: "beacon",
    });
  } catch {
    /* Analytics must never interrupt the interface. */
  }
}
