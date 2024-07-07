import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { LogoIcon, HomeIcon, DindeIcon, PouletIcon } from '@/components/icons';
// import { User } from './user';
import { NavItem } from './nav-item';
// import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Dinde',
  description:
    'Dinde est une entreprise possède des fermes qui vendent des poulets et des dindes à de nombreux vendeurs dans de nombreuses villes'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="items-center inline-flex gap-2 font-semibold"
                  href="/"
                >
                <LogoIcon className='h-5 w-5 m-0'/>
                  <span className="">Dinde</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <HomeIcon className="h-4 w-4" />
                    Accueil
                  </NavItem>
                  {/* <NavItem href="/users">
                    <UsersIcon className="h-4 w-4" />
                    Utilisateurs
                    </NavItem> */}
                  <NavItem href="/dindes">
                    <DindeIcon className="h-5 w-5" />
                    Dindes
                  </NavItem>
                  <NavItem href="/poulettes">
                    <PouletIcon className="h-5 w-5" />
                    Poulettes
                  </NavItem>
                  {/* <NavItem href="/settings">
                    <SettingsIcon className="h-4 w-4" />
                    Paramètres
                  </NavItem> */}
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                <LogoIcon />
                <span className="">Dinde</span>
              </Link>
              {/* <User /> */}
            </header>
            
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
