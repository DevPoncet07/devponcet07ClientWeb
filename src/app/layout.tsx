import { Providers } from "@/components/provider/themeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <link rel="icon" href="/static/favicon.png" />

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}