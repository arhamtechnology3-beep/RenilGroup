import type { NextRequest } from "next/server";

/** Set to `false` and redeploy to bring the site back online. */
const MAINTENANCE_MODE = true;

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Under Maintenance | Renil Groups</title>
<link rel="icon" href="/favicon.ico" />
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    min-height:100svh;display:flex;align-items:center;justify-content:center;
    padding:24px;background:#161513;color:#f8f5ee;
    font-family:system-ui,-apple-system,"Segoe UI",sans-serif;text-align:center;
    background-image:radial-gradient(circle at 50% 30%,rgba(169,131,69,.18),transparent 60%);
  }
  main{max-width:560px}
  img{width:88px;height:auto;margin-bottom:28px}
  .eyebrow{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#b99a68;margin-bottom:16px}
  h1{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(32px,6vw,52px);line-height:1.12;margin-bottom:18px}
  p{color:#d8c7ad;line-height:1.7;font-size:16px}
  .line{width:64px;height:1px;background:#a98345;margin:28px auto}
  a{color:#b99a68;text-decoration:none}
  a:hover{color:#f8f5ee}
  .contact{font-size:14px}
</style>
</head>
<body>
<main>
  <img src="/logo/renil-crest-v2.png" alt="Renil Groups" />
  <div class="eyebrow">Renil Groups &bull; We Grow Together</div>
  <h1>We&rsquo;ll be back shortly.</h1>
  <p>Our website is undergoing scheduled maintenance to bring you a better experience. Thank you for your patience.</p>
  <div class="line"></div>
  <p class="contact">
    Need to reach us? <a href="mailto:contact@renilgroups.com">contact@renilgroups.com</a><br />
    <a href="https://wa.me/917208194497">WhatsApp +91 72081 94497</a>
  </p>
</main>
</body>
</html>`;

export function proxy(_request: NextRequest) {
  if (!MAINTENANCE_MODE) return;

  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "3600",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const config = {
  matcher: [
    // Every page route; skip Next internals and files with an extension (logo, favicon, etc.)
    "/((?!_next/static|_next/image|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
