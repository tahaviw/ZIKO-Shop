# ZIKO-shop

ZIKO-shop is a modern full-stack clothing e-commerce platform built with the TanStack Start framework architecture. The project focuses on high-performance rendering, scalable front-end architecture, responsive UI composition, and production-grade state management to deliver a seamless online shopping experience.

The application combines server-side rendering, client-side hydration, modular component systems, and modern React tooling to create a fast, scalable, and maintainable fashion e-commerce platform optimized for real-world production workflows.

---

## Features

- Responsive modern clothing e-commerce interface
- Dynamic product catalog rendering
- Stateful shopping cart management
- File-based routing architecture
- Server-side rendering (SSR) with client hydration
- Reusable component-driven UI system
- Interactive product carousels
- Form validation with schema-based validation
- Accessible UI primitives powered by Radix UI
- Optimized performance using Bun and Vite
- Utility-first styling architecture with Tailwind CSS v4
- Icon system integration using Lucide React
- Scalable state management using Zustand
- Mobile-first responsive layouts

---

## Tech Stack

### Core Framework

- TanStack Start
- React 19
- TypeScript

### Routing & Data Layer

- @tanstack/react-router
- @tanstack/react-query

### Styling & UI

- Tailwind CSS v4
- @tailwindcss/vite
- Radix UI
- Lucide React
- embla-carousel-react

### State Management & Forms

- Zustand
- React Hook Form
- Zod

### Runtime & Tooling

- Bun
- Vite

---

## Live Demo

Production Deployment:

```txt
https://ziko-shop.lovable.app/
```

---

## Project Structure

```bash
ZIKO-shop/
│
├── src/
│   ├── routes/
│   ├── components/
│   ├── store/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── utils/
│
├── public/
├── package.json
├── bun.lockb
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Installation & Deployment

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

### Run Development Server

```bash
bun run dev
```

### Open the Application

```bash
http://localhost:3000
```

### Production Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run start
```

---

## Usage

1. Launch the development server using Bun.
2. Open the application in your browser.
3. Browse the clothing catalog through responsive product grids and product carousels.
4. Navigate between product categories using the routing system.
5. Open product details and interact with UI components.
6. Add products to the shopping cart.
7. Update quantities or remove products dynamically.
8. Interact with dialogs, dropdowns, and forms powered by Radix UI.
9. Experience smooth responsive layouts across desktop, tablet, and mobile devices.

---

## Architecture & Logic Breakdown

### TanStack Start Full-Stack Architecture

The application is built using the TanStack Start framework, providing:

- Server-side rendering (SSR)
- Client-side hydration
- File-based routing
- Full-stack React architecture

This architecture improves:

- Initial page load performance
- SEO optimization
- Scalability
- Developer experience

---

### SSR & Hydration Workflow

Pages are initially rendered on the server before being hydrated on the client:

```txt
Server Render → HTML Response → Client Hydration → Interactive React Application
```

Benefits include:

- Faster perceived rendering
- Better SEO indexing
- Reduced client-side rendering overhead
- Improved accessibility performance

---

### File-Based Routing System

Routing is managed using TanStack Router with a file-based structure:

```bash
src/routes/
```

Each route automatically maps to a page inside the application, improving:

- Route scalability
- Project maintainability
- Cleaner architecture
- Faster development workflows

---

### Zustand Shopping Cart State Management

The shopping cart is managed globally using Zustand.

Core cart responsibilities include:

- Add to cart
- Remove products
- Update quantities
- Cart persistence
- Total price calculations

This lightweight state architecture avoids unnecessary boilerplate while maintaining high runtime performance.

---

### Form Handling & Validation

Forms are implemented using:

- React Hook Form
- Zod schema validation

This setup provides:

- Type-safe validation
- Optimized form rendering
- Scalable form architecture
- Improved developer ergonomics

---

### Component System & UI Composition

The application uses Radix UI primitives combined with Tailwind CSS utilities to create reusable and accessible components such as:

- Dialogs
- Accordions
- Select menus
- Navigation components
- Interactive product modals

Lucide React provides scalable SVG icon integration across the application interface.

---

### Styling Architecture

Tailwind CSS v4 powers the styling system using utility-first design patterns:

```css
class="flex items-center justify-between rounded-xl"
```

Advantages include:

- Faster UI development
- Consistent spacing system
- Scalable responsive layouts
- Minimal CSS overhead
- Improved maintainability

---

## Performance Optimizations

- Bun runtime for faster dependency installation and execution
- Vite-powered instant HMR and optimized builds
- Server-side rendering for improved page speed
- Component-level modularization
- Lightweight Zustand state architecture
- Optimized responsive image rendering

---

## Future Improvements

- Authentication and user accounts
- Payment gateway integration
- Wishlist functionality
- Advanced product filtering and search
- Inventory management system
- Product reviews and ratings
- Dark mode support
- Order tracking dashboard
- CMS integration
- Persistent server-side cart synchronization

---

## Author

Taha Belghiti — Junior Full-stack Developer  
Built with TanStack Start, TypeScript, & Tailwind CSS · © 2026
