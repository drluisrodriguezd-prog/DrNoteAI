import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrNoteAI | El Copiloto Inteligente",
  description:
    "Landing page de DrNoteAI, el copiloto inteligente para dictado médico con IA en español para médicos de Latinoamérica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
