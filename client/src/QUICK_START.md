# 🚀 Quick Start Guide - Amafor Gladiators FC Next.js

## ⚡ Get Running in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:3000**

---

## ✅ What's Working Right Now

You can immediately test these pages:

### Public Pages (Live)
| Page | URL | Status |
|------|-----|--------|
| Homepage | http://localhost:3000 | ✅ |
| News Listing | http://localhost:3000/news | ✅ |
| News Article | http://localhost:3000/news/1 | ✅ |
| Fixtures | http://localhost:3000/fixtures | ✅ |
| Login | http://localhost:3000/login | ✅ |
| Search | http://localhost:3000/search?q=football | ✅ |

### Features to Test
- ✅ Mobile menu (click hamburger icon)
- ✅ Search bar in header
- ✅ News article cards
- ✅ Fixture listings
- ✅ League table
- ✅ Login form with role selection
- ✅ Search with tabbed results
- ✅ Footer links
- ✅ WhatsApp widget (bottom right)
- ✅ Cookie consent banner

---

## 🎨 Design Verification

Check that everything looks professional and minimalistic:

### Colors
- **Primary:** Sky Blue (#87CEEB) - buttons, links, accents
- **Secondary:** Charcoal (#2F4F4F) - header, headings
- **Success:** Green - badges, alerts
- **Backgrounds:** White and Slate-50

### Typography
- **Headings:** Montserrat (bold, clean)
- **Body:** Open Sans (readable, professional)

### Layout
- ✅ Responsive at all breakpoints (mobile, tablet, desktop)
- ✅ Consistent spacing (8px system)
- ✅ Clean cards with subtle shadows
- ✅ Professional athletic aesthetic

---

## 🔄 What Needs Converting

13 pages remain. Use templates in `/COMPLETE_NEXTJS_PAGES.md`:

**High Priority:**
1. Fixture Detail (`/fixtures/:id`)
2. Academy Hub (`/academy`)
3. Support Page (`/support`)

**Medium Priority:**
4. Donate Checkout
5. Patron Checkout
6. Supporter Wall
7. Advertise Info
8. Advertiser Registration

**Low Priority:**
9. Pro View Access
10. Pro View Application
11. Help/Contact
12. Password Reset Request
13. Password Reset Form

---

## 📋 Conversion Process (Simple!)

For each remaining page:

### Step 1: Create the file
```bash
# Example: Converting Fixture Detail
touch app/fixtures/[id]/page.tsx
```

### Step 2: Copy template
Open `/COMPLETE_NEXTJS_PAGES.md` and find the template for your page.

### Step 3: Make these changes
```typescript
// 1. Add at top if page uses hooks:
'use client'

// 2. Update imports:
import Link from 'next/link'              // was: from 'react-router-dom'
import { useRouter } from 'next/navigation' // was: from 'react-router-dom'
import { Header } from '@/components/Header' // was: '../components/Header'

// 3. Update function signature for dynamic routes:
export default function Page({ params }: { params: { id: string } }) {
  // Use params.id instead of useParams()
}

// 4. Update Links:
<Link href="/news">News</Link>  // was: to="/news"

// 5. Add at bottom:
<Footer />
<CookieConsent />
<WhatsAppWidget />
```

### Step 4: Test
```bash
# Visit the new page in browser
http://localhost:3000/your-new-page
```

---

## 🐛 Common Issues & Fixes

### Issue: "Module not found"
**Fix:** Use `@/` prefix for imports
```typescript
// ✅ Correct
import { Header } from '@/components/Header'

// ❌ Wrong
import { Header } from '../components/Header'
```

### Issue: Hooks error
**Fix:** Add `'use client'` at the very top of the file
```typescript
'use client'

import { useState } from 'react'
// ... rest of imports
```

### Issue: Link doesn't work
**Fix:** Use `href` not `to`
```typescript
// ✅ Correct
<Link href="/news">News</Link>

// ❌ Wrong  
<Link to="/news">News</Link>
```

### Issue: Styles not loading
**Fix:** Restart dev server
```bash
# Press Ctrl+C to stop
# Then run again:
npm run dev
```

---

## 📊 Progress Tracking

As you convert pages, update this checklist:

### Phase 1: Public Website (19 screens)
- [x] Homepage
- [x] News Listing
- [x] News Detail
- [x] Fixtures Listing
- [ ] Fixture Detail ← **Do this next**
- [ ] Academy Hub
- [ ] Support/Donate
- [ ] Donation Checkout
- [ ] Patron Checkout
- [ ] Supporter Wall
- [x] Search Results
- [ ] Advertise Info
- [ ] Advertiser Registration
- [ ] Pro View Access
- [ ] Pro View Application
- [ ] Help/Contact
- [x] Login
- [ ] Password Reset Request
- [ ] Password Reset Form

**Progress:** 6/19 (32% complete)

---

## 🎯 Today's Goal

Convert just **3 pages** to get to 50%:

1. **Fixture Detail** - Most important (users want match details)
2. **Academy Hub** - Showcases youth program
3. **Support Page** - Critical for donations

These 3 will give you the most important functionality!

---

## 💡 Pro Tips

### Tip 1: Copy-Paste Wisely
The old `/pages` folder has 95% of the code you need. Just update:
- Imports (react-router → next)
- Links (to → href)
- Routing (useParams → params prop)

### Tip 2: Use Search & Replace
In your editor, find and replace across a file:
- Find: `from 'react-router-dom'`
- Replace: `from 'next/link'` (or 'next/navigation')

### Tip 3: Test Incrementally
Don't convert all pages at once. Do 1-2 pages, test them, then continue.

### Tip 4: Reference Working Pages
Look at `/app/news/[id]/page.tsx` - it's a perfect example of a dynamic route in Next.js!

---

## 🆘 Need Help?

### Documentation Order
1. **Start here:** `/QUICK_START.md` (this file)
2. **For templates:** `/COMPLETE_NEXTJS_PAGES.md`
3. **For status:** `/NEXTJS_MIGRATION_STATUS.md`
4. **For errors:** `/NEXTJS_ERRORS_FIXED.md`
5. **For overview:** `/README.md`

### Key Files to Understand
- `/app/page.tsx` - Homepage (static page example)
- `/app/news/[id]/page.tsx` - Dynamic route example
- `/app/search/page.tsx` - Client component with search params
- `/components/Header.tsx` - Navigation example

---

## ✨ You're Ready!

Everything is set up and error-free. Just:

1. **Run** `npm run dev`
2. **Test** the 6 working pages
3. **Convert** remaining pages using templates
4. **Enjoy** your modern Next.js application!

**Good luck! 🎉⚽**

---

*Questions? Check the documentation files listed above!*
