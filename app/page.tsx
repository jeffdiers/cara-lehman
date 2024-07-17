import { Header, Footer } from "@/components/nav-menus";
import HomeScreen from "@/components/home-screen";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-background text-foreground min-h-screen justify-between">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}
