# Al-Muhajirin School Portal

Official web portal and information system for Yayasan Al-Muhajirin, comprising Madrasah Aliyah (MA), Madrasah Tsanawiyah (MTs), and Pondok Pesantren. Built with Next.js and Supabase.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Features

- **Public Portal**: Information pages, school profiles (MA, MTs, Ponpes), news, achievements, academic calendar, and PPDB (Student Admission) landing page.
- **Admin Dashboard**: Role-Based Access Control (RBAC) with 4 roles (Superadmin, Admin MA, Admin MTs, Admin Ponpes).
- **Data Management**: Manage teachers, students (PPDB), news, and achievements per institution.
- **Responsive Design**: Mobile-first layout with native-like drawer navigation and optimized tables.
- **Dark Mode**: Integrated system-wide theme switching (Light/Dark).

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- NPM or Yarn
- Supabase project credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prince-salman/almuhajirin.git
   cd almuhajirin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app`: Next.js App Router pages and API routes.
- `/src/components`: Reusable React components (Navbar, Footer, AdminSidebar, etc).
- `/src/lib`: Utility functions and Supabase client initialization.
- `/public`: Static assets (SVG, icons).

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply link your GitHub repository to Vercel and set the required environment variables in the project settings.

## License

Copyright © 2026 Yayasan Al-Muhajirin. All rights reserved.
