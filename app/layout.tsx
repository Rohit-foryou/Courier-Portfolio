import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
import Chatbot from "../components/Chatbot/Chatbot";

export const metadata = {
  title: "Kamlesh Mailing | India Post Franchise",
  description:
    "Authorized India Post Franchise providing Speed Post, Registered Post, and bulk mailing services across India.",
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

        {/* Floating AI-style Assistant */}
        <Chatbot />
      </body>
    </html>
  );
}
