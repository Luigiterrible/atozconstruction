# Security Headers Deployment

Use one of the following options based on your hosting stack.

## Apache (.htaccess)

Implemented in project root: `/.htaccess`.

Key headers set:
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`

## Nginx

Add inside your `server {}` block:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self' https: data: blob:; img-src 'self' https: data: blob:; font-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; connect-src 'self' https:; frame-src https://www.google.com https://www.gstatic.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; upgrade-insecure-requests" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

Then reload:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## Cloudflare

Set these Response Header Transform Rules:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Content-Security-Policy: (same value as above)`

Notes:
- Keep HSTS disabled until HTTPS is fully working on all hostnames.
- If any script/style/embed breaks, tighten CSP iteratively instead of removing it.
