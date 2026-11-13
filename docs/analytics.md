# Analytics (free tiers)

Vercel Web Analytics handles automatic page views. Custom interactions go to the existing GA4 property `G-LX1Q6M9PN9`, not to paid Vercel custom events. Speed Insights remains installed.

## GA4 dashboard setup

In Admin → Data streams → web stream → Enhanced measurement, enable page views and history-based page changes for React Router navigation. Keep automatic page views: the application deliberately does not send additional manual `page_view` events, which could double-count them. Verify one `page_view` per route change in Realtime/DebugView on the deployed site.

Use Reports → Engagement → Pages and screens, selecting the page path dimension to compare routes (the document title is shared). Automatic engagement/session/device/source metrics depend on the GA4 property configuration.

Register event-scoped custom dimensions for `ui_language`, `placement`, `destination`, `project`, `service`, `photo`, `section`, `egg`, `command`, and `selected_language` if needed in reports. Numeric parameters `percent` and `duration_seconds` can be custom metrics. Custom definitions apply to future data; they are not retroactive. Mark `outbound_link` or `project_open` as key events if those actions represent your goal.

## Event inventory

| Event | Data / trigger |
| --- | --- |
| navigation_click | Internal destination pathname, header/footer/content/page_flow placement |
| project_open | Project slug on showcase card activation |
| anchor_click | Anchor section identifier |
| outbound_link | Controlled service name: github, linkedin, spotify, other |
| language_change | Selected UI language |
| menu_toggle | Expanded/collapsed |
| workspace_photo_select | Selected photo identifier |
| photo_expand / photo_close | Photo identifier; close includes seconds open |
| reading_progress | 25 / 50 / 75 / 100 percent, once per route visit |
| section_view | Section ID when entering central viewport, once per route visit |
| details_toggle | Expanded/collapsed native details |
| terminal_command | Only :wq / sudo / unknown; never the free-form input |
| easter_egg | quit / sudo / blue_screen |
| terminal_restart | Restore terminal after blue screen |

All custom events include `page_path` and `ui_language`. Event handlers do not transmit arbitrary link queries, image captions, terminal input, or personal identifiers. They run only in production builds, tolerate missing/blocked analytics and never block navigation. Each event is a genuine UI action; selecting an image is distinct from enlarging it. History navigation is measured through automatic page views, not navigation_click.

Embedded Spotify playback is not measured: iframe load is not proof of playback and its internal clicks are cross-origin. No session recording, fingerprinting or paid feature was added.

## Limits and verification

Vercel Hobby currently includes 50,000 monthly page-view events shared across the team and a one-month reporting window. Custom events require Pro/Enterprise. Check current limits: https://vercel.com/docs/analytics/limits-and-pricing
GA4 event parameters: https://developers.google.com/analytics/devguides/collection/ga4/event-parameters
SPA page views: https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications

Deployment and account-side settings were not modified by this implementation. Confirm collection against the live GA4 property after deployment; build/lint do not prove delivery to the account. Custom interactions are intentionally disabled under `npm run dev`.
