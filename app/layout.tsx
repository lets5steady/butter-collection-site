import type { Metadata } from "next";
import { Tangerine } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Butter Collection",
  description: "Butter Collectionは、芳醇な発酵バターの香りと繊細な口どけを追求したクッキー専門店です",
  metadataBase: new URL("https://butter-collection-site.vercel.app/"),
  
  // OGPの設定
  openGraph: {
    title: "Butter Collection",
    description: "Butter Collectionは、芳醇な発酵バターの香りと繊細な口どけを追求したクッキー専門店です",
    url: "https://butter-collection-site.vercel.app/",
    siteName: "Butter Collection",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogpimage.jpg",
        width: 1200,
        height: 630,
        alt: "こだわりのギフトボックスに詰め合わされた、様々な種類のクッキー",
      },
    ],
  },

  // Twitter(X)の設定
  twitter: {
    card: "summary_large_image",
    title: "Butter Collection",
    description: "Butter Collectionは、芳醇な発酵バターの香りと繊細な口どけを追求したクッキー専門店です",
    images: {
      url: "/ogpimage.jpg",
      alt: "こだわりのギフトボックスに詰め合わされた、様々な",
    },
  },

  // アイコン(Favicon)の設定
  icons: {
    icon: "/logo-small.png",
  },
};

const FontTangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const FontCinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
