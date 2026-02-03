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


=========

## about section

about section container color and design

display: flex;
padding: 60px 104px 96px 104px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
align-self: stretch;
background: #0A0E24;

that include 

- badge button "chat.svg icon & Have Questions? ->"

button design

display: flex;
padding: 8px 24px;
align-items: center;
gap: 16px;
border-radius: 100px;
border: 1px solid var(--C9, #0A0E24);
background: var(--C9, #0A0E24);

- title "Why We Exist" use global style

- content 

design
color: #FFF;
text-align: center;
font-family: "TT Travels Trl";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 28px */


We redefine collaboration, innovation, and success. From our unwavering commitment to excellence to our dynamic approach that adapts to your unique needs, discover why working with us is not just a choice, it's a strategic investment in your unparalleled success.

- button "Get In Touch" primary button

- in background there was 2 image like 3D element 
    -  left side of the container is credit.png 
    - right side of the container is badge.png 
    those are like background image , above content have better z-index

- counter card

card is full width with container

card design

display: flex;
padding: 80px;
align-items: flex-start;
gap: 16px;
align-self: stretch;
border-radius: 28px;
background: #161C3D;
box-shadow: 0 -4px 120px 0 rgba(0, 0, 0, 0.25);

card have 3 items in one row
    - 97% "Satisfaction rate"
    - 10+ "Delivered projects"
    - 5 "Years of experience"

    these item are in center of the card and number and text are in one column center

number design
color: #F0F2FF;
text-align: center;

/* Large Heading */
font-family: "Futura PT Cond";
font-size: 112px;
font-style: normal;
font-weight: 800;
line-height: 92%; /* 103.04px */
letter-spacing: -2.24px;
text-transform: uppercase;

text design 
color: #FFF;
text-align: center;
font-family: "TT Travels Trl";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 28px */


====

## service section

- title 'We Can Help You build"

- row
    - title "Custom Website & Mobile Development"
    - content "Tailored apps and websites built to scale your business or startup."
    - button "Get In Touch"

- a crad 
    full width of the container , bg color is 
    design 
    width: 1292px;
    height: 300px;
    border-radius: 28px;
    background: radial-gradient(74.23% 74.59% at 50% 50%, #29398B 0%, #1D254F 100%);

    - in the center of the card there was an image "virtu detail
    - in left side there was 2 images
        - se-app-blur.png
        - se-app.png
    - in right side
        - se-web-app.png
        - se-product.png

left and right images should be as background image

======

## project section

- title "Our Latest Success stories" Success stories is secondary color

- there was only two card with image

1st card image is success-story-1.png 50% height of the card

card design
height: 339px;
align-self: stretch;
border-radius: 28px;
background: url(<path-to-image>) lightgray 0px 0.261px / 100% 125.681% no-repeat;

card title "VirtuLearn International"
title design
color: var(--C8, #182257);

/* H3 */
font-family: "Futura PT Cond";
font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: 92%; /* 44.16px */
letter-spacing: -0.96px;
text-transform: uppercase;

card text "Sass Booking Platform covering both court owners Sass Booking Platform covering both court owners side and clients Sass Booking Platfor and clients"

2nd card image is is success-story-2.png 50% height of the card

title - Sports Empire Sports Empire
content - Sass Booking Platform covering both court owners side and clients Sass Booking Platform covering both court owners side and clients

card design

height: 339px;
align-self: stretch;
border-radius: 28px;
background: url(<path-to-image>) lightgray -5.087px 5.163px / 101.573% 98.478% no-repeat;


======

## testimonial section

- bg is full width of screen and bg image is testimonial-bg.png

- title is "What People say about  us" and each word in one line of right side 30% of width in desktop screen , one line full text in mobile

- in right 70% of section there was card carousel

** carousel should be autoplay without dot

card design
display: flex;
width: 450px;
padding: 40px 30px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
position: absolute;
left: 385px;
bottom: 5px;
border-radius: 30px;
background: #FFF;
box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.10);

in a card there was 2 part

avatar-1.png  avatar-2.png
width: 80px;
height: 80px;
flex-shrink: 0;
aspect-ratio: 1/1;
border-radius: 80px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat, #FFBEB8;

beside of avatar there was name and role

name design
color: #1C244C;

/* H4 */
font-family: "Futura PT Cond";
font-size: 39px;
font-style: normal;
font-weight: 800;
line-height: 92%; /* 35.88px */
letter-spacing: -0.78px;
text-transform: uppercase;

2nd part of card is message 
color: #00153B;
font-family: Poppins;
font-size: 56.512px;
font-style: normal;
font-weight: 500;
line-height: 67.5px; /* 119.444% */



===========

## learn section

- title "TEACHING THE NEXT GENERATION"

- image learning.png
image design
height: 437px;
align-self: stretch;
border-radius: 28px;
background: #161C3D;

- subtitle "For over 4 years we've shared practical web dev tutorials "
- content "The same expertise we bring to client projects."
- button "Our youtube channel"

======

## contact section

section is two column layouts

left 6 col is title and content

- title "Let's Connect and Ignite Success" Let's Connect is secondary color
- content "Ready to take the next step? Contact us today to explore how our innovative strategies can propel your business forward. Our team is here to turn your vision into a reality."

right 6 col is a form

form card design 
display: flex;
padding: 48px 40px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
flex: 1 0 0;
border-radius: 28px;
background: #161C3D;

 there was 3 inputs name , email and message (textarea)
 input should include label and placeholder

 input design 
 display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;

submit button  "Submit"

display: flex;
padding: 20px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 12px;
background: #FFF;

========

## footer section

footer section bg color and design

display: flex;
width: 1280px;
padding: 48px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
border-radius: 28px;
background: #161C3D;

- logo white-logo.png
- links are in one line in desktop screen -  About us , Services, Learn , Testimonials , Contact Us , 
- in right side , there was , facebook , youtube and linkedin icon 

link icon card design 

display: flex;
padding: 10px;
align-items: flex-start;
gap: 10px;
border-radius: 10px;
background: #FFF;

- © Webhub 2026, All Rights Reserved in below center

copyright design
display: flex;
padding-top: 24px;
justify-content: center;
align-items: flex-start;
gap: 12px;
align-self: stretch;
border-top: 1px solid #1F2B15;

