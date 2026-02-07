# Independent Electronic Music Label Platform

A high-performance, aesthetically immersive web platform for an independent electronic music label. Features a "Void & Laser" design language, a public-facing site for releases and artists, and a private dashboard for artist management.

## 🚀 Features

### Public Site

- **Immersive Design**: "Void & Laser" aesthetic with deep dark backgrounds and acid lime accents.
- **Discography**: Grid-based layout showcasing releases with high-quality artwork.
- **Artist Roster**: Dedicated profiles for label artists.
- **Events Calendar**: Listings for upcoming tours and shows.
- **Responsive Layout**: Fully responsive experience across all devices.

### Artist Dashboard

- **Overview**: Real-time statistics on streams, revenue, and audience engagement.
- **Release Management**: Tools for artists to view and manage their discography.
- **Financial Reports**: Transparent breakdown of earnings and recent transactions.
- **Settings**: Comprehensive profile and account management.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom "Void" theme
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (custom implementations in `@workspace/ui`)
- **Icons**: [Lucide React](https://lucide.dev)
- **Monorepo**: [Turborepo](https://turbo.build)
- **Package Manager**: [pnpm](https://pnpm.io)

## 📦 Project Structure

```bash
.
├── apps/
│   └── web/                 # Main Next.js application
│       ├── app/             # App Router pages (Public & Dashboard)
│       └── components/      # Web-specific components (Hero, SiteHeader, etc.)
├── packages/
│   ├── ui/                  # Shared UI component library
│   │   ├── components/      # Reusable atoms (Button, Card, Input, etc.)
│   │   └── styles/          # Global styles and theme definitions
│   └── typescript-config/   # Shared TS configs
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To build the application for production:

```bash
pnpm build
```

## 🎨 Design System

The application uses a custom design system defined in `packages/ui/src/styles/globals.css`.

- **Primary Color**: Acid Lime (`#ccff00`)
- **Background**: Zinc 950 / Black
- **Typography**: `Geist` Sans and `Geist` Mono for a technical, industrial look.

## 🤝 Contributing

Contributions are welcome! Please ensure you follow the existing code style and run linting checks before submitting a PR.
