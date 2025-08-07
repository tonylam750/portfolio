
import "./globals.css";
import NavBar from "@/components/navBar";




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="flex flex-col h-screen">
        
      
          <NavBar/>
          <main className="flex-1 overflow-auto">

          {children}
          </main>

      </body>
      
    </html>
  );
}
