import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
