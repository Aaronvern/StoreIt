# StoreIt

A modern storage management and file sharing platform that enables users to effortlessly upload, organize, and share files.

## Tech Stack

- React 19
- Next.js 15
- TailwindCSS
- ShadCN
- TypeScript
- Appwrite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Aaronvern/StoreIt.git
cd StoreIt
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


⭐ If you find this project useful, please consider giving it a star!
