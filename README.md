# Investment Learning Quiz App

A React-based web application that helps new investors learn about various investment topics through interactive quizzes.

## Features

- Search for investment topics (stocks, options, futures, crypto, real estate)
- Interactive quiz interface
- Real-time question search
- Responsive design
- Built with React, Vite, and Supabase

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

1. Create a new Supabase project
2. Create the questions table using the following SQL:
   ```sql
   create table public.questions (
     id uuid primary key default gen_random_uuid(),
     question_text text not null,
     answer text not null,
     keywords text[] not null,
     topic text not null,
     created_at timestamp with time zone default now()
   );
   ```

3. Enable Row Level Security (RLS) and create a policy that allows public read access:
   ```sql
   alter table public.questions enable row level security;
   
   create policy "Allow public read access"
   on public.questions
   for select
   to public
   using (true);
   ```

## Deployment

The app is configured for deployment on Netlify:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Add your environment variables in the Netlify dashboard
4. Deploy!

## Contributing

Feel free to submit issues and enhancement requests! 