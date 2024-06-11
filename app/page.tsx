"use client";

import { useSearchParams } from "next/navigation";
import HomePage from "@Pages/Home";
import ChannelPage from "@Pages/Channel";

export default function App() {
  const searchParams = useSearchParams();

  const gotChannel = searchParams?.has("channel");
  const channel = searchParams?.get("channel") ?? "";

  return (
    <main className="h-full w-full flex-1">
      {gotChannel ? <ChannelPage channel={channel} /> : <HomePage />}
    </main>
  );
}
