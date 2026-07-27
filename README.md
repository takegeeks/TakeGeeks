# TakeGeeks landing page

Drop-in Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui-style
landing page for TakeGeeks.

## Install dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-slot nodemailer
npm install -D @types/nodemailer
```

If your project doesn't already have shadcn/ui set up, that's fine — the
`components/ui/button.tsx` and `components/ui/card.tsx` files here are
self-contained and only need the packages above.

## File tree

```
app/
  page.tsx              # assembles the full landing page + SEO metadata
  api/
    apply/route.ts       # sends application emails via SMTP
components/
  site/
    navbar.tsx
    hero.tsx
    trusted-stats.tsx
    why-takegeeks.tsx
    workflow-timeline.tsx
    free-trial.tsx
    how-it-works.tsx
    batch-info.tsx
    apply-form.tsx        # the actual application form
    faq.tsx
    footer.tsx
  ui/
    button.tsx
    card.tsx
lib/
  utils.ts               # cn() helper
```

## Application form → email setup

"Apply Now" submits a form (name, email, phone, GitHub/portfolio,
experience level, motivation) to `app/api/apply/route.ts`, which emails
the submission to **contact@takegeeks.com** and **jawad@takegeeks.com**
via SMTP (using `nodemailer`), with the applicant's email set as
`replyTo` so you can reply directly from your inbox.

Add these to your `.env.local` (and your hosting provider's env vars):

```bash
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false          # "true" only if using port 465
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
MAIL_FROM="TakeGeeks <no-reply@takegeeks.com>"
```

Any SMTP provider works — Google Workspace, SES, Postmark, SendGrid,
Mailgun, Resend's SMTP endpoint, etc. Just plug in that provider's host,
port, and credentials. Without these env vars set, the endpoint returns
a clear 500 error instead of failing silently.

To change who receives applications, edit the `RECIPIENTS` array at the
top of `app/api/apply/route.ts`.

## Security: spam and abuse protection

The apply flow has three layers of protection:

**1. Rate limiting**
`lib/rate-limit.ts` caps each IP to 5 submissions per 10 minutes. This is
in-memory, which is fine on a single long-running server but **does not
work reliably on serverless platforms** (Vercel, Lambda) since each
invocation can start with fresh memory. If you deploy on Vercel and want
this to actually hold across requests, swap it for
[Upstash Redis rate limiting](https://upstash.com/docs/redis/sdks/ratelimit-ts/overview)
(free tier, ~10 line change, same function signature).

**2. Timing trap + honeypot**
A hidden field bots tend to fill in, and a check that rejects submissions
sent less than 2 seconds after the form loaded — both silently accepted
(no error shown) so bots don't learn to work around them.

**3. Input length caps**
Every field has a server-side max length, so nobody can post huge
payloads through the form to waste your SMTP quota or inbox space.

**On DDoS specifically:** none of the above stops a real distributed
denial-of-service attack (thousands of IPs hitting the endpoint at once)
— that's an infrastructure-layer problem, not something application code
can fully solve. If that's a real concern, put the site behind
**Cloudflare** (free plan includes DDoS mitigation) or deploy on
**Vercel**, which has DDoS protection built into its edge network by
default — that stops traffic before it ever reaches your function, which
is what matters at volume.

## Notes

- Copy the `app/`, `components/`, and `lib/` folders straight into your
  existing project root (merge, don't overwrite, if you already have
  files at those paths).
- Uses only Tailwind's default theme (`blue-600`, `slate-*`, `rounded-2xl`,
  `rounded-xl`) — no `tailwind.config` changes required.
- All sections are client components only where they need interactivity
  (mobile menu, FAQ accordion, scroll-triggered animation); `app/page.tsx`
  itself stays a server component so the `metadata` export works for SEO.
- Anchor links (`#why-takegeeks`, `#workflow`, `#trial`, `#faq`, `#apply`)
  are already wired between the navbar, hero, and CTAs.
- Swap the footer's social `href="#"` values for your real LinkedIn,
  GitHub, and Discord links.