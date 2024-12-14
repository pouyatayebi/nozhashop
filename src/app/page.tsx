import { getPosts } from "@/server/actions/get-posts";

export default async function Home() {
  const data = await getPosts();
  console.log("data", data);

  return <main>main</main>;
}
