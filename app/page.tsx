import { Header, Footer } from "@/components/nav-menus";
import HomeScreen from "@/components/home-screen";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between bg-background text-foreground min-h-screen">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}
