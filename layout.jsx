export const metadata = {
  title: "Private Chauffeur in Monterey County",
  description:
    "Private chauffeur for airport rides, wine tours, and local travel in Monterey County.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
