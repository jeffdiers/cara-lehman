import { ModeToggle } from "@/components/mode-toggle";
import { H3 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-caprasimo space-y-4">
        <H3>Hello, my name is Jeff.</H3>
        <p>I am a Software Engineer based in NYC.</p>
        <p>Currently, I am looking for a new role.</p>
        <ModeToggle />
      </div>

      <div className="">Projects</div>

      <div className="">Thank you</div>
    </main>
  );
}
