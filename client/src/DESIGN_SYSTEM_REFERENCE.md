# 🎨 Amafor Gladiators FC - Design System Reference

Quick reference guide for applying PRD-compliant styling.

## 🎯 Colors

### **Primary Colors**
```css
/* Sky Blue - Primary brand color */
bg-sky-600        /* Buttons, primary actions */
bg-sky-700        /* Button hover states */
text-sky-700      /* Links, labels, accents */
text-sky-200      /* Light text on dark backgrounds */

/* Charcoal - Secondary brand color */
bg-charcoal       /* Header, footer, navigation */
text-charcoal     /* Primary text on light backgrounds */
```

### **Status Colors**
```css
/* Success - Green */
bg-success-green  /* Success messages, confirmations */
text-success-green

/* Error - Red  */
bg-error-red      /* Error messages, destructive actions */
text-error-red

/* Warning - Yellow */
bg-yellow-500     /* Warning messages */
text-yellow-700
```

### **Neutrals**
```css
bg-white          /* Card backgrounds */
bg-slate-50       /* Page backgrounds */
text-slate-600    /* Secondary text */
text-slate-400    /* Disabled text */
```

## 📝 Typography

### **Font Families**
```jsx
className="font-heading"  // Montserrat (use for h1-h6, button text)
className="font-body"     // Open Sans (use for paragraphs, inputs)
```

### **Font Weights**
```jsx
className="font-semibold"  // 600 - Buttons, links, important text
className="font-bold"      // 700 - Headings
className="font-normal"    // 400 - Body text
```

### **Example Usage**
```jsx
<h1 className="text-5xl font-heading font-bold">Heading</h1>
<h2 className="text-4xl font-heading">Sub-heading</h2>
<p className="font-body">Body text uses Open Sans automatically</p>
<button className="font-semibold">Button Text</button>
```

## 📦 Components

### **Buttons**
```jsx
/* Primary Button */
<button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold shadow-card transition-colors">
  Primary Action
</button>

/* Secondary Button */
<button className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
  Secondary Action
</button>

/* Danger Button */
<button className="bg-error-red hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-card transition-colors">
  Delete
</button>

/* Success Button */
<button className="bg-success-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-card transition-colors">
  Confirm
</button>
```

### **Cards**
```jsx
<div className="bg-white rounded-lg shadow-card p-6">
  <h3 className="font-heading mb-2">Card Title</h3>
  <p className="text-slate-600">Card content</p>
</div>
```

### **Links**
```jsx
<Link to="/page" className="text-sky-700 hover:text-sky-800 font-semibold transition-colors">
  Link Text
</Link>
```

### **Form Inputs**
```jsx
<input 
  type="text"
  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
  placeholder="Enter text..."
/>
```

## 🔲 Layout & Spacing

### **Spacing (8px system)**
```jsx
className="gap-2"   // 8px
className="gap-4"   // 16px
className="gap-6"   // 24px
className="gap-8"   // 32px
className="gap-12"  // 48px
className="gap-16"  // 64px

className="p-2"     // padding 8px
className="p-4"     // padding 16px
className="p-6"     // padding 24px
className="p-8"     // padding 32px

className="mb-2"    // margin-bottom 8px
className="mb-4"    // margin-bottom 16px
className="mb-6"    // margin-bottom 24px
```

### **Border Radius**
```jsx
className="rounded-lg"      // 8px (default - use this)
className="rounded-full"    // Full circle (avatars, badges)
```

### **Shadows**
```jsx
className="shadow-card"     // 0 2px 8px rgba(0,0,0,0.1) (use this)
```

## 📱 Responsive Classes

### **Display**
```jsx
className="hidden md:block"           // Hide on mobile, show on desktop
className="block md:hidden"           // Show on mobile, hide on desktop
className="flex flex-col md:flex-row" // Stack on mobile, row on desktop
```

### **Grid**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// 1 column mobile, 2 tablet, 3 desktop
```

## 🎭 State Classes

### **Hover States**
```jsx
className="hover:bg-sky-700"
className="hover:text-sky-800"
className="hover:shadow-lg"
className="hover:scale-105"
```

### **Focus States**
```jsx
className="focus:outline-none focus:ring-2 focus:ring-sky-700"
```

### **Disabled States**
```jsx
className="disabled:bg-slate-300 disabled:cursor-not-allowed"
```

## 📋 Common Patterns

### **Page Container**
```jsx
<main className="py-16 bg-slate-50 min-h-screen">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</main>
```

### **Section**
```jsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-heading mb-8">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

### **Article Card**
```jsx
<Link 
  to="/article/1"
  className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
>
  <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(...)'}} />
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-sm text-sky-700 font-semibold">Category</span>
      <span className="text-slate-300">•</span>
      <span className="text-sm text-slate-500">Date</span>
    </div>
    <h3 className="text-xl font-heading mb-2">Article Title</h3>
    <p className="text-slate-600">Article excerpt...</p>
  </div>
</Link>
```

### **Stat Card**
```jsx
<div className="bg-white rounded-lg p-6 text-center shadow-card">
  <div className="text-3xl font-bold text-sky-700 mb-1">150+</div>
  <div className="text-slate-600">Description</div>
</div>
```

### **Hero Section**
```jsx
<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(...)'}}>
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/85"></div>
  </div>
  <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 className="text-5xl md:text-7xl mb-4 font-heading">Title</h1>
    <p className="text-xl md:text-2xl mb-8 text-sky-200">Subtitle</p>
    <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold shadow-card">
      CTA Button
    </button>
  </div>
</section>
```

## 🔧 Using New Components

### **Loading States**
```jsx
import { LoadingSpinner, SkeletonCard } from '../components/LoadingStates';

// Simple spinner
{isLoading && <LoadingSpinner size="md" text="Loading..." />}

// Skeleton for card grid
{isLoading && (
  <div className="grid md:grid-cols-3 gap-6">
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </div>
)}
```

### **Alerts**
```jsx
import { SuccessAlert, ErrorAlert } from '../components/Alerts';

{showSuccess && (
  <SuccessAlert 
    title="Success!" 
    message="Your action was completed successfully." 
    onClose={() => setShowSuccess(false)}
  />
)}

{error && (
  <ErrorAlert 
    title="Error" 
    message={error} 
    onClose={() => setError(null)}
  />
)}
```

### **Empty States**
```jsx
import { EmptyState } from '../components/EmptyStates';

{results.length === 0 && (
  <EmptyState
    title="No Results Found"
    description="Try adjusting your search criteria"
    action={{
      label: "Clear Filters",
      onClick: () => clearFilters()
    }}
  />
)}
```

## ✅ Quick Checklist

When styling a new page, ensure:

- [ ] Headers use `font-heading`
- [ ] Buttons use sky-600/700 colors
- [ ] Cards use `shadow-card`
- [ ] Border radius is `rounded-lg` (8px)
- [ ] Links are `text-sky-700 hover:text-sky-800`
- [ ] Form inputs have `focus:ring-sky-700`
- [ ] Loading states where data loads
- [ ] Error/success alerts for user actions
- [ ] Empty states where lists might be empty

## 🎨 Color Combinations

### **Do's ✅**
```
Sky Blue buttons on white backgrounds
Charcoal text on white backgrounds
White text on charcoal backgrounds
Sky Blue text on white backgrounds
Success green for confirmations
Error red for destructive actions
```

### **Don'ts ❌**
```
Yellow for primary buttons (use sky-blue)
Green for primary buttons (use sky-blue)
Light text on light backgrounds (contrast!)
Dark text on dark backgrounds (contrast!)
```

---

**Reference Homepage** (`/pages/Homepage.tsx`) for complete implementation examples of all patterns.
