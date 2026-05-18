import { ThemeProvider } from "@/components/provider/themeProvider";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body >
        <ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
