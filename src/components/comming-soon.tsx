"use client";

import { words } from "@/lib/content";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CommingSoon() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <Image src={"/logo.png"} alt="logo" width={180} height={210} />
      <h1 className="text-4xl font-bold mb-4">{words.commingSoonTitle}</h1>
      <p className="text-lg mb-8 px-4 md:px-0">
        {words.commingSoonDescription}
      </p>

      <Button className="bg-[#EF7F1A]" asChild>
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={"/eitaa-border.png"}
              alt="eitaa"
              width={30}
              height={30}
            />
            <span>{words.eitaaCta}</span>
          </div>
        </Link>
      </Button>
    </div>
  );
}
