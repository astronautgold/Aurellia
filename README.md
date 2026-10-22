# Aurelia — Bespoke Interiors & Handcrafted Furniture

A clean, modern React website created to match the design specification precisely. Built with **beginner-friendly React**, modular components, and pure CSS.

---

## 📸 Design Match Overview

| Section | Description |
| :--- | :--- |
| **Navbar** | Logo `AURELIA`, links (`Home · Services · Collection · Contact`), and `Book a consultation` button |
| **Hero** | Title *"Live in rooms that feel like you"*, subtitle, CTA buttons, and warm taupe `Living room image` placeholder |
| **Services** | Warm beige section with 3 cards: `Interior Design`, `Custom Furniture`, and `3D Walkthroughs` |
| **Featured Collection** | 6 furniture items with prices in Indian Rupees (`₹`), matching the mockup grid |
| **Client Testimonial** | Full-width forest green banner with client quote and `Client name, Chennai` |
| **Footer** | Navigation links and studio contact email `hello@aurelia.example` |
| **Bonus Features** | Interactive "Book a Consultation" modal form & product quick-view details modal |

---

## 📁 Beginner-Friendly Project Structure

```text
aurella/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation bar & mobile menu
│   │   ├── Hero.jsx              # Hero headline, CTAs & image box
│   │   ├── Services.jsx          # Services band container
│   │   ├── ServiceCard.jsx       # Individual service item card
│   │   ├── Collection.jsx        # Featured collection grid
│   │   ├── ProductCard.jsx       # Individual product card with price
│   │   ├── Testimonial.jsx       # Forest green client quote banner
│   │   ├── Footer.jsx            # Bottom links & email
│   │   ├── ConsultationModal.jsx # Interactive booking popup form
│   │   └── ProductModal.jsx      # Product quick-view modal
│   ├── App.jsx                   # Main parent component assembling everything
│   ├── App.css                   # Component styling & responsive breakpoints
│   ├── index.css                 # Colors, CSS variables & resets
│   └── main.jsx                  # React DOM entry point
├── index.html                    # HTML shell & Google Fonts (Playfair Display)
└── package.json                  # Standard Vite + React configuration
```

---

## 🚀 How to Run the Project

1. Open your terminal in this folder (`d:\New folder\aurella`).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

---

## 💡 Beginner Concepts Used in This Code

1. **Functional Components**: Every piece of UI is an easy-to-read React function (like `Hero`, `Navbar`, etc.).
2. **Props**: Passing data from parent components to child components (e.g., passing product data into `ProductCard`).
3. **Array `.map()`**: Rendering lists of items (services and collection items) dynamically from JavaScript arrays.
4. **State (`useState`)**: Managing interactive parts like opening/closing the mobile menu and popup modals.
5. **Clean CSS Variables**: Color values and fonts are defined in `src/index.css` under `:root`, making it super easy to change any color in one place!
