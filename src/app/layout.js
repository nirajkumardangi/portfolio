import "./globals.css";

export const metadata = {
  title: "Niraj Kumar Dangi — Full-Stack & AI Developer",
  description:
    "Full-Stack & AI Developer who builds RAG systems and computer-vision applications with Next.js, React, Node.js, PostgreSQL, MongoDB, AWS, and Docker.",
  openGraph: {
    title: "Niraj Kumar Dangi — Full-Stack & AI Developer",
    description:
      "Full-stack web development, local RAG, and AI-powered product work.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='28' fill='%230d756b'/%3E%3Ctext x='50' y='66' font-size='37' text-anchor='middle' font-family='Arial' font-weight='700' fill='white'%3ENKD%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
