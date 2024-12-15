import { Button } from "@/components/ui/button";
import { getPosts } from "@/server/actions/get-posts";

export default async function Home() {
  const data = await getPosts();
  console.log("data", data);

  return (
    <main className="text-4xl p-6">
      <h1 className="text-secondary-foreground">Hello there</h1>
      <Button>Click Me</Button>
    </main>
  );
}
