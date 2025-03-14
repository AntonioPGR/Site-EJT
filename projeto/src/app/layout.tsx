import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "EJ Turing - Inovação e Excelência",
  description: "Empresa junior de computação do IF Sul de Minas - Campus poços de caldas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className="font-['Open_Sans'] antialiased"
      >
        {children}
      </body>
    </html>
  );
}
