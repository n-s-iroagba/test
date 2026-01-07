# Amafor Gladiators FC - Next.js Application

A comprehensive football club web application built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Routing:** Next.js File-based Routing

## 📋 Project Status

**Current Phase:** Migration to Next.js (In Progress)
- ✅ Core infrastructure setup
- ✅ Components converted to Next.js
- ✅ 6/19 pages converted
- 🔄 13 pages remaining (templates provided)

## 🏗️ Project Structure

```
/app                    # Next.js app directory (App Router)
  /news                 # News pages
    /[id]               # Dynamic news detail
    page.tsx            # News listing
  /fixtures             # Fixtures pages
  /login                # Login page
  /search               # Search results
  page.tsx              # Homepage
  layout.tsx            # Root layout
  globals.css           # Global styles

/components             # Reusable React components
  Header.tsx
  Footer.tsx
  CookieConsent.tsx
  WhatsAppWidget.tsx
  EmptyStates.tsx
  Alerts.tsx
  LoadingStates.tsx

/data                   # Mock data
  mockData.ts           # All application data

/pages                  # Legacy React Router pages (will be deleted)
```

## 🎨 Design System

- **Primary Color:** Sky Blue (#87CEEB)
- **Secondary Color:** Charcoal (#2F4F4F)
- **Typography:**
  - Headings: Montserrat
  - Body: Open Sans
- **Spacing:** 8px base unit system
- **Style:** Minimalistic, professional, athletic

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your values (optional - app works without them)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Features Implemented (Phase 1 - Public Pages)

### ✅ Completed
- [x] Homepage with hero, latest news, support CTA
- [x] News listing with category filters
- [x] News detail with related articles
- [x] Fixtures & league table
- [x] Login with multi-role support
- [x] Search with filtered results

### 🔄 In Progress (Use templates in `/COMPLETE_NEXTJS_PAGES.md`)
- [ ] Fixture detail
- [ ] Academy hub
- [ ] Support & donation pages
- [ ] Advertiser pages
- [ ] Pro View portal
- [ ] Help & password reset

## 🗂️ Page Routes

### Public Pages (Next.js)
| Route | File | Status |
|-------|------|--------|
| `/` | `/app/page.tsx` | ✅ Done |
| `/news` | `/app/news/page.tsx` | ✅ Done |
| `/news/:id` | `/app/news/[id]/page.tsx` | ✅ Done |
| `/fixtures` | `/app/fixtures/page.tsx` | ✅ Done |
| `/fixtures/:id` | `/app/fixtures/[id]/page.tsx` | 🔄 Template ready |
| `/academy` | `/app/academy/page.tsx` | 🔄 Template ready |
| `/support` | `/app/support/page.tsx` | 🔄 Template ready |
| `/login` | `/app/login/page.tsx` | ✅ Done |
| `/search` | `/app/search/page.tsx` | ✅ Done |

See `/COMPLETE_NEXTJS_PAGES.md` for conversion templates.

## 🔧 Development Guide

### Creating a New Page

1. **Create page file:**
   ```bash
   # For static route: /about
   /app/about/page.tsx
   
   # For dynamic route: /news/:id
   /app/news/[id]/page.tsx
   ```

2. **Basic page template:**
   ```typescript
   import { Header } from '@/components/Header'
   import { Footer } from '@/components/Footer'
   
   export default function PageName() {
     return (
       <>
         <Header />
         <main className="py-16 bg-white min-h-screen">
           <div className="container mx-auto px-4">
             {/* Your content */}
           </div>
         </main>
         <Footer />
       </>
     )
   }
   ```

3. **For client-side interactivity:**
   Add `'use client'` at the top if using useState, useEffect, etc.

### Converting from React Router

See `/COMPLETE_NEXTJS_PAGES.md` for detailed conversion guide.

**Quick reference:**
```typescript
// OLD (React Router)
import { Link } from 'react-router-dom'
<Link to="/news">News</Link>

// NEW (Next.js)
import Link from 'next/link'
<Link href="/news">News</Link>
```

## 📊 Mock Data

All data is in `/data/mockData.ts`:
- News articles
- Players
- Fixtures
- League table
- Patron tiers
- Ad zones
- Supporters

**Import example:**
```typescript
import { newsArticles, players } from '@/data/mockData'
```

## 🎯 Key Features

### Navigation
- Responsive header with mobile menu
- Search functionality
- Role-based login redirects

### Pages
- Dynamic routing for news and fixtures
- Category filtering
- Related content suggestions
- Ad zone placeholders
- Cookie consent banner
- WhatsApp widget

### Components
- Reusable empty states
- Loading skeletons
- Alert messages
- Consistent styling

## 🔜 Upcoming Phases

**Phase 2:** Pro View Portal (12 screens)
- Scout dashboard
- Player scouting
- Match analysis
- Video library

**Phase 3:** Advertiser Dashboard (10 screens)
- Campaign management
- Analytics
- Payment integration

**Phase 4:** Media Manager CMS (15 screens)
- Content publishing
- Media library
- Scheduling

**Phase 5:** Admin Backoffice (15+ screens)
- User management
- System settings
- Audit logs

## 📚 Documentation

- `/NEXTJS_MIGRATION_STATUS.md` - Migration progress tracker
- `/COMPLETE_NEXTJS_PAGES.md` - Page conversion templates
- `/IMPLEMENTATION_STATUS.md` - Overall project status
- `/DESIGN_SYSTEM_REFERENCE.md` - Design guidelines

## 🐛 Troubleshooting

### Common Issues

**1. Import errors:**
- Use `@/` prefix for absolute imports
- Example: `import { Header } from '@/components/Header'`

**2. "React Router" errors:**
- Make sure you're editing files in `/app`, not `/pages`
- The `/pages` folder is legacy and not used by Next.js

**3. Client component errors:**
- Add `'use client'` at top of files using hooks or browser APIs

**4. Styling issues:**
- Check `/app/globals.css` for custom CSS variables
- Use Tailwind classes from the design system

## 🤝 Contributing

1. Check `/COMPLETE_NEXTJS_PAGES.md` for page conversion templates
2. Follow the existing code structure
3. Use TypeScript for all new files
4. Maintain the PRD design system (colors, fonts, spacing)

## 📄 License

Private project for Amafor Gladiators FC.

## 📞 Contact

- Email: info@amaforgladiatorsfc.com
- WhatsApp: +234 XXX XXX XXXX

---

**Built with ⚽ for Amafor Gladiators FC**
