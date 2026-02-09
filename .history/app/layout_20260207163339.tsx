import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";

export const metadata = {
  title: "Courier Portfolio",
  description: "Courier & logistics service portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
