"use client";

import { useState } from "react";

export default function Wallet() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("MetaMask not detected! Please install MetaMask or use WalletConnect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Wallet Connect Demo</h1>

        <div className="mb-6">
          {account ? (
            <p className="text-green-600 font-semibold break-all">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </p>
          ) : (
            <p className="text-gray-500">Not Connected</p>
          )}
        </div>

        <button
          onClick={connectWallet}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all w-full"
        >
          {account ? "Connected" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
}
