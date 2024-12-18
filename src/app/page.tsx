import CommingSoon from "@/components/comming-soon";
import { Button } from "@/components/ui/button";

const commingSoon = true;

export default async function Home() {
  return (
    <>
      {commingSoon ? (
        <CommingSoon />
      ) : (
        <main className="text-4xl p-6">
          <h1 className="text-secondary-foreground">Hello there</h1>
          <Button>Click Me</Button>
        </main>
      )}
    </>
  );
}
