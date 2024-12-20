import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "@/components/navBar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <NavBar />
          {children}
        </ThemeProvider>
        


      </body>
      
    </html>
  );
}
