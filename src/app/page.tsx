import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
        </div>
     
    </main>
  );
}
