import "./globals.css";
import SiteHeader from "@/components/siteHeader";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <SiteHeader />
        {children}

      </body>
    </html>
  );
}
