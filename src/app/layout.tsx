
import { Inter } from "next/font/google";
import { Header } from "app/components/shared/Header/Header";
import { Footer } from "app/components/shared/Footer/Footer";
import '../sass/globals.sass'
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
