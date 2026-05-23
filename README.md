# ZIKO-shop

ZIKO-shop is a modern full-stack clothing e-commerce web application built with the TanStack Start framework architecture. The project focuses on scalable front-end engineering, server-side rendering performance, responsive UI systems, and production-grade state management to deliver a fast and immersive online shopping experience.

The application combines modern React tooling, SSR hydration workflows, reusable component architecture, and optimized styling utilities to create a maintainable and high-performance fashion e-shop suitable for real-world deployment scenarios.

---

## Features

- Responsive clothing e-commerce interface
- Dynamic product catalog rendering
- Stateful shopping cart management
- File-based routing architecture
- Server-side rendering with client hydration
- Reusable component-driven UI system
- Interactive product carousels
- Accessible Radix UI component integration
- Schema-based form validation
- Mobile-first responsive layouts
- Utility-first styling architecture
- Fast development workflow powered by Bun and Vite
- Global state management using Zustand
- SVG icon integration using Lucide React

---

## Tech Stack

### Framework & Core

- TanStack Start
- React
- TypeScript

### Routing & Data Management

- @tanstack/react-router
- @tanstack/react-query

### Styling & UI

- Tailwind CSS v4
- Radix UI
- Lucide React
- embla-carousel-react

### State & Forms

- Zustand
- React Hook Form
- Zod

### Tooling & Runtime

- Bun
- Vite

---

## Live Demo

Production Deployment:

```txt
https://ziko-shop.lovable.app/
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/ZIKO-shop.git
```

### Navigate to the Project Directory

```bash
cd ZIKO-shop
```

### Install Dependencies

```bash
bun install
```

### Start the Development Server

```bash
bun run dev
```

### Open in Browser

```txt
http://localhost:3000
```

---

## Usage

1. Launch the development server using Bun.
2. Open the application in your browser.
3. Browse clothing collections through responsive product layouts.
4. Navigate between pages using the file-based routing system.
5. Interact with product cards, carousels, and dialogs.
6. Add products to the shopping cart.
7. Update quantities or remove products dynamically.
8. Use responsive navigation and UI components across desktop and mobile devices.
9. Experience optimized rendering and smooth transitions throughout the application.

---

## Architecture & Logic Breakdown

### TanStack Start Architecture

The application is built using TanStack Start, a modern full-stack React framework providing:

- Server-side rendering (SSR)
- Client-side hydration
- File-based routing
- Scalable application structure

This architecture improves:

- SEO performance
- Initial page load speed
- Scalability
- Developer experience

---

### SSR & Hydration Workflow

Pages are initially rendered on the server before becoming fully interactive on the client.

```txt
Server Render → HTML Response → Client Hydration → Interactive React UI
```

Benefits include:

- Faster perceived performance
- Improved SEO indexing
- Reduced client rendering overhead
- Better accessibility support

---

### File-Based Routing

Routing is powered by TanStack Router using a file-based routing structure.

```bash
src/routes/
```

Each route automatically maps to a page component, improving:

- Route organization
- Maintainability
- Scalability
- Development efficiency

---

### Zustand State Management

The shopping cart state is managed globally using Zustand.

Core responsibilities include:

- Add to cart
- Remove items
- Quantity updates
- Cart synchronization
- Total calculations

This lightweight architecture minimizes boilerplate while maintaining high runtime performance.

---

### UI Composition System

The interface uses reusable UI primitives powered by Radix UI and styled with Tailwind CSS v4.

Components include:

- Dialogs
- Accordions
- Dropdown menus
- Select components
- Interactive product sections

Lucide React provides scalable SVG icons across the application interface.

---

### Styling Workflow

Tailwind CSS v4 powers the utility-first styling system.

```css
class="flex items-center justify-between rounded-xl"
```

Advantages include:

- Faster UI development
- Consistent design system
- Responsive layouts
- Reduced CSS complexity
- Easier maintenance

---

### Forms & Validation

Forms are implemented using:

- React Hook Form
- Zod validation schemas

This combination provides:

- Type-safe validation
- Optimized rendering
- Cleaner form logic
- Scalable form architecture

---

## Performance Optimizations

- Bun runtime for faster dependency management
- Vite-powered optimized builds
- Server-side rendering architecture
- Modular component structure
- Lightweight Zustand state management
- Responsive image handling
- Utility-first CSS optimization

---

## Future Improvements

- User authentication system
- Payment gateway integration
- Wishlist functionality
- Product filtering and search
- Inventory management
- Product reviews and ratings
- Dark mode support
- Order tracking dashboard
- Persistent cart synchronization

---

## Author

Taha Belghiti — Junior Full-stack Developer  
Built with TanStack Start, TypeScript, & Tailwind CSS · © 2026
