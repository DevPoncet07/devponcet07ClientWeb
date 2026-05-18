import { ThemeProvider } from "@/components/provider/themeProvider";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function () {
            try {
              const saved = localStorage.getItem('theme');
              const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = saved || system;
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          })();`}
        </Script>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  );
}
