import "./globals.css";

export const metadata = {
  title: "Wallet Connect Demo",
  description: "Demo project for connecting MetaMask wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
