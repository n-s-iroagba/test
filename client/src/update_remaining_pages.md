# Quick Update Guide for Remaining 11 Pages

## Files to Update:
1. SupporterWall.tsx
2. SearchResults.tsx
3. AdvertiseInfo.tsx
4. AdvertiserRegistration.tsx
5. ProViewAccess.tsx
6. ProViewApplication.tsx
7. HelpContact.tsx
8. Login.tsx
9. PasswordResetRequest.tsx
10. PasswordResetForm.tsx
11. WhatsAppWidget.tsx

## Batch Find/Replace (VS Code: Ctrl+Shift+H)

Run these in order, selecting "pages" folder:

### Round 1: Background Colors
```
bg-green-900 → bg-charcoal
bg-green-800 → bg-sky-800
bg-green-700 → bg-sky-700
bg-green-600 → bg-sky-600
bg-green-500 → bg-sky-500
bg-green-100 → bg-sky-100
bg-green-50 → bg-sky-50
```

### Round 2: Text Colors
```
text-green-900 → text-charcoal
text-green-800 → text-sky-800
text-green-700 → text-sky-700
text-green-600 → text-sky-600
text-yellow-600 → text-sky-700
```

### Round 3: Hover States
```
hover:bg-green-800 → hover:bg-sky-800
hover:bg-green-700 → hover:bg-sky-700
hover:bg-green-50 → hover:bg-sky-50
hover:text-green-800 → hover:text-sky-800
hover:text-green-700 → hover:text-sky-700
```

### Round 4: Borders & Rings
```
border-green-700 → border-sky-700
ring-green-700 → ring-sky-700
focus:ring-green-700 → focus:ring-sky-700
ring-yellow-500 → ring-sky-500
```

### Round 5: Gradients
```
from-green-600 → from-sky-600
to-green-800 → to-sky-800
```

### Round 6: Yellow to Sky (Grand Patron)
```
bg-yellow-50 → bg-sky-50
bg-yellow-500 → bg-sky-500
bg-yellow-600 → bg-sky-600
```

### Round 7: Border Radius
```
rounded-xl → rounded-lg
```

### Round 8: Shadows (only on card divs)
Manually find: `className="bg-white rounded-lg shadow-sm`
Replace with: `className="bg-white rounded-lg shadow-card`

## Manual Updates Needed

### Add font-heading to all headings:

For each file, search for these patterns and add `font-heading ` after `className="`:

```
<h1 className="
<h2 className="
<h3 className="
<h4 className="
```

### Add font-medium to buttons:

Find prominent buttons and add `font-medium` to className.

## File-Specific Notes:

### Supporter Wall.tsx
- Line 45: `'text-yellow-600 bg-yellow-50'` → `'text-sky-700 bg-sky-50'` (Grand Patron)
- Line 48: `'text-green-600 bg-green-50'` → `'text-sky-600 bg-sky-50'` (Advocate)

### WhatsAppWidget.tsx
- Components folder, not pages
- Update: `bg-green-600 hover:bg-green-700` → `bg-sky-600 hover:bg-sky-700`

## Testing Checklist

After updates:
- [ ] Visual check each page in browser
- [ ] Verify sky-blue (#87CEEB) is consistent
- [ ] Check all headings have Montserrat font
- [ ] Test responsive at 320px, 768px, 1024px
- [ ] No console errors

## Time Est: 2-3 hours total
