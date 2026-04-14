// Google Consent Mode v2 default state.
// MUST render BEFORE GoogleTagManager / GoogleAnalytics so the defaults
// are set before gtag.js and gtm.js load. Respects any saved localStorage
// consent from prior visits.
export function ConsentDefault() {
  return (
    <script
      id="consent-default"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var __saved;
try { __saved = JSON.parse(localStorage.getItem('zetup_consent') || 'null'); } catch(e) { __saved = null; }
var __state = __saved && __saved.accepted ? 'granted' : 'denied';
gtag('consent', 'default', {
  ad_storage: __state,
  ad_user_data: __state,
  ad_personalization: __state,
  analytics_storage: __state,
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});`,
      }}
    />
  );
}
