import "./globals.css";


export const metadata = {
  title: "Peperuney",
  description:
    "Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups.",
  openGraph: {
    title: "Peperuney",
    description:
      "Load up on SOL from Coinbase, Binance, or OKX. Double-check your wallet address—no room for slip-ups.",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
