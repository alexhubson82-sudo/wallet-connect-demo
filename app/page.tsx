"use client";

import Wallet from "./wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Wallet Connect Demo</h1>
      <Wallet />
    </main>
  );
}
