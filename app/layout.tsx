import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Jhonatan Smith | Data Engineer, Data Scientist, GenAI Engineer";
const description =
  "Premium portfolio for a data professional building scalable data platforms, applied ML systems, and GenAI products.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Jhonatan Smith Portfolio",
  keywords: [
    "Data Engineer",
    "Data Scientist",
    "GenAI Engineer",
    "MLOps",
    "Azure",
    "AWS",
    "Databricks",
    "Machine Learning",
    "LLM",
  ],
  authors: [{ name: "Jhonatan Smith" }],
  creator: "Jhonatan Smith",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
