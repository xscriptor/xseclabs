import "./globals.css";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: "X Sec Labs",
  description: "Plataforma para registros de cyberseguridad",
};

export default function RootLayout({ children }) {
  const locale = "es";
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        <div className="md:pb-20 pt-12 md:pt-0">{children}</div>
      </body>
    </html>
  );
}
