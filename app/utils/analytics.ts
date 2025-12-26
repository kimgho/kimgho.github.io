import { sendGAEvent } from "@next/third-parties/google";

export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[GA Event] ${eventName}:`, eventParams);
  }
  sendGAEvent("event", eventName, eventParams ?? {});
};

export const GAPostEvents = {
  selectCategory: (category: string) => {
    trackEvent("select_category", { category });
  },
  search: (searchTerm: string) => {
    if (searchTerm.trim()) {
      trackEvent("search", { search_term: searchTerm });
    }
  },
  clickPost: (slug: string, title: string) => {
    trackEvent("click_post", { post_slug: slug, post_title: title });
  },
};
