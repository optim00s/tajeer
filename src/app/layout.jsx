import "./globals.css";

export const metadata = {
  title: "Tajeer",
  description: "an e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-tjrgrey text-white">
        {children}
      </body>
    </html>
  );
}
