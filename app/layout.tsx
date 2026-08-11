import "./globals.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
