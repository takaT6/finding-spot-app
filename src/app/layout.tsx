"server-only";
import './globals.css';
import AppContextProvider from '@/context/app-context';
import { Header } from '@/components/Header';
import { ScrollLock } from '@/utils/stop-scroll';
import { createServerClient } from '@/utils/supabase-server';

export const metadata = {
  title: 'find map',
  description: 'Generated by create next app',
};

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const { data: { session } } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Header session={session} />
          {children}
          <ScrollLock />
        </AppContextProvider>
      </body>
    </html >
  );
}
