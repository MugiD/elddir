import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elddir - sort your followings",
  description: "Tired of messy followings? Elddir is here to help you sort them out.",
  keywords: ["elddir", "followings", "sort", "influencers"],
  creator: "Bek Slambek",
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`$inter.className max-w-md m-auto my-8`}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex justify-between items-center">
              <Link href="/" className="font-semibold">
                elddir
              </Link>
              <div className="flex justify-between items-center gap-2">
                <ModeToggle />
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-10 w-10",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </header>
            <SignedIn>
              <div>{children}</div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            {/* <footer className="py-8 text-center absolute bottom-0 left-0 w-full">Made by Bek Slambek</footer> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
