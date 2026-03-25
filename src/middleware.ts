// NOTE: Next.js 16 renames middleware.ts to proxy.ts.
// However, next-intl v4.x only exports `createMiddleware` from "next-intl/middleware"
// and does not yet support the proxy convention. Keep this as middleware.ts until
// next-intl ships a proxy-compatible export. Next.js 16 still supports middleware.ts
// with a deprecation warning — it will continue to work.
// Tracking: https://github.com/amannn/next-intl/issues
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|ar)/:path*"],
};
