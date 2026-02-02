you are a senior frontend 3D web app enginner

I want to setup nextjs project for software service portfolio website 

I want to design project structure are as follow 

src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx          # Home page only
│  ├─ globals.css
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  │
│  ├─ sections/
│  │  └─ home/
│  │     ├─ Hero.tsx
│  │     ├─ About.tsx
│  │     ├─ Projects.tsx
│  │     ├─ Experience.tsx
│  │     ├─ Skills.tsx
│  │     └─ Contact.tsx
│  │
│  └─ ui/
│     ├─ Button.tsx
│     └─ Card.tsx
│
├─ content/
│  ├─ projects.ts
│  ├─ experience.ts
│  └─ skills.ts
│
├─ types/
│  ├─ project.ts
│  └─ experience.ts
│
└─ public/



====

I want to use tech stack as below 

Next.js (App Router)
TypeScript
Tailwind CSS
ThreeJS
Framer motion
** recommand any tailwindcss ui library for ai vibe coding


====

❌ What NOT to Do

❌ Don’t put large JSX inside page.tsx

❌ Don’t fetch data with useEffect

❌ Don’t mix UI + data logic in pages

❌ Don’t create api/ folder if unused

====

⭐ Bonus: Portfolio Best Practices

Use Static Rendering (default)

Add metadata for SEO

Use next/image

Add sitemap.ts

Add robots.ts

Keep animations inside components

====

## hero section

hero section is simple

there was 3 items in center of the page

-  badge button "What Others Say About Us ->"
button design
display: flex;
padding: 8px 24px 8px 8px;
align-items: center;
gap: 16px;
border-radius: 100px;
border: 1px solid rgba(68, 96, 239, 0.30);
background: rgba(98, 118, 218, 0.10);

in the button there was include clients with small design (use client-1 , -2 png from assets)
width: 32px;
height: 32px;
border-radius: 100px;
border: 2px solid #202957;
background: url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat;

- main title "Innovative Software Solutions for Businesses and Startups"
deisgn is main title design from global css

- primary  button "Book a Free Consultation"


** all are in center of section and min height is 90vh
