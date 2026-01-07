# Complete Next.js Page Templates

## ✅ Already Created
- `/app/page.tsx` - Homepage
- `/app/news/page.tsx` - News listing
- `/app/news/[id]/page.tsx` - News detail
- `/app/fixtures/page.tsx` - Fixtures listing
- `/app/login/page.tsx` - Login

## 📝 Remaining Pages - Copy & Create

### 1. Fixture Detail: `/app/fixtures/[id]/page.tsx`

Simply copy the content from `/pages/FixtureDetail.tsx` and make these changes:
- Change `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
- Change `import { useParams } from 'react-router-dom'` → Remove (params come from props)
- Add `export default function FixtureDetail({ params }: { params: { id: string } })` 
- Change `const { id } = useParams()` → `const fixture = fixtures.find(f => f.id === params.id)`
- Change all `to="/path"` → `href="/path"`
- Add imports: `import { notFound } from 'next/navigation'`
- Add CookieConsent and WhatsAppWidget at bottom
- Replace relative imports with `@/` prefix

### 2. Academy: `/app/academy/[[...section]]/page.tsx`

Use catch-all optional route for /academy and /academy/:section
- Change `import { useParams } from 'react-router-dom'` → function signature with params
- `export default function AcademyHub({ params }: { params: { section?: string[] } })`
- `const section = params?.section?.[0] || 'overview'`
- Convert all Link components to next/link
- Add 'use client' at top (uses useState for tabs)

### 3. Support Pages

#### `/app/support/page.tsx`
- Copy from `/pages/SupportDonate.tsx`
- Convert Link imports
- Change routing references

#### `/app/donate/page.tsx`
- Copy from `/pages/DonationCheckout.tsx`
- Add 'use client' (uses useState)
- Convert useNavigate to useRouter from 'next/navigation'

#### `/app/become-patron/page.tsx`
- Copy from `/pages/PatronCheckout.tsx`
- Add 'use client' (uses useState)
- Convert routing

#### `/app/supporter-wall/page.tsx`
- Copy from `/pages/SupporterWall.tsx`
- Convert Link components

### 4. Search: `/app/search/page.tsx`

- Copy from `/pages/SearchResults.tsx`
- Add 'use client' at top (uses useState)
- Change `import { useSearchParams } from 'react-router-dom'` → `import { useSearchParams } from 'next/navigation'`
- `const searchParams = useSearchParams()`
- `const query = searchParams.get('q') || ''`
- Convert all Links

### 5. Advertising Pages

#### `/app/advertise/page.tsx`
- Copy from `/pages/AdvertiseInfo.tsx`
- Convert Links

#### `/app/advertise/register/page.tsx`
- Copy from `/pages/AdvertiserRegistration.tsx`
- Add 'use client' (uses useState)
- Convert Links

### 6. Pro View Pages

#### `/app/pro-view/page.tsx`
- Copy from `/pages/ProViewAccess.tsx`
- Convert Links

#### `/app/pro-view/apply/page.tsx`
- Copy from `/pages/ProViewApplication.tsx`
- Add 'use client' (uses useState)
- Convert Links

### 7. Help & Password Reset

#### `/app/help/page.tsx`
- Copy from `/pages/HelpContact.tsx`
- Add 'use client' (uses useState)

#### `/app/password-reset/page.tsx`
- Copy from `/pages/PasswordResetRequest.tsx`
- Add 'use client' (uses useState)
- Convert Links

#### `/app/password-reset/[token]/page.tsx`
- Copy from `/pages/PasswordResetForm.tsx`
- Add 'use client' (uses useState)
- `export default function PasswordResetForm({ params }: { params: { token: string } })`
- Use `params.token` instead of `useParams()`

## Conversion Checklist for Each Page

```typescript
// OLD (React Router):
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export function PageName() {
  const navigate = useNavigate()
  const { id } = useParams()
  
  return (
    <>
      <Header />
      <Link to="/path">Link</Link>
    </>
  )
}

// NEW (Next.js):
'use client' // Only if using hooks like useState, useEffect

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { CookieConsent } from '@/components/CookieConsent'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'

export default function PageName({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  return (
    <>
      <Header />
      <main>
        <Link href="/path">Link</Link>
      </main>
      <Footer />
      <CookieConsent />
      <WhatsAppWidget />
    </>
  )
}
```

## Quick Find & Replace

When converting each page file:

1. **Add at top if using hooks:**
   ```
   'use client'
   ```

2. **Replace imports:**
   ```
   import { Link } from 'react-router-dom'
   →
   import Link from 'next/link'
   
   import { useNavigate } from 'react-router-dom'
   →
   import { useRouter } from 'next/navigation'
   
   import { useParams } from 'react-router-dom'
   → Remove (use params prop)
   
   import { useSearchParams } from 'react-router-dom'
   →
   import { useSearchParams } from 'next/navigation'
   
   from '../components/
   →
   from '@/components/
   
   from '../data/
   →
   from '@/data/
   ```

3. **Replace routing:**
   ```
   <Link to="/path">
   →
   <Link href="/path">
   
   navigate('/path')
   →
   router.push('/path')
   
   const { id } = useParams()
   →
   // In function signature: { params }: { params: { id: string } }
   // Then use: params.id
   ```

4. **Function export:**
   ```
   export function PageName()
   →
   export default function PageName()
   ```

5. **Add to bottom before closing fragment:**
   ```tsx
   <Footer />
   <CookieConsent />
   <WhatsAppWidget />
   ```

## After Converting All Pages

1. **Delete old files:**
   - `/pages` directory
   - `/App.tsx`
   - `/styles/globals.css` (already have `/app/globals.css`)

2. **Update package.json scripts if needed**

3. **Test all routes:**
   ```bash
   npm run dev
   ```

4. **Update IMPLEMENTATION_STATUS.md** to reflect Next.js migration

## Dynamic Routes Reference

- `/news/:id` → `/app/news/[id]/page.tsx`
- `/fixtures/:id` → `/app/fixtures/[id]/page.tsx`
- `/academy/:section` → `/app/academy/[[...section]]/page.tsx` (optional catch-all)
- `/password-reset/:token` → `/app/password-reset/[token]/page.tsx`

## Static Generation

For static export (if needed), add to each page:

```typescript
export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }))
}
```

This is already in `/app/news/[id]/page.tsx` as an example.
