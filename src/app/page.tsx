import { getPosts } from "@/server/actions/get-posts";
import Image from "next/image";

export default async function Home() {

  const data=await getPosts()
  console.log("data",data)


    return(
      <main>
       main
        
      </main>
    );
  }
 
  
