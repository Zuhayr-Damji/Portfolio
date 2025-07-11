import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affordable Web Design for Small Businesses in Birmingham',
  description:
    'Professional and affordable web design for small businesses in Birmingham. Get a custom and mobile-friendly website that looks great and converts visitors into customers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ensure the hero image loads first */}
        <link
          rel="preload"
          as="image"
          href="/images/Hero-img-bg.jpg"
          type="image/jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Zuhayr Damji Design",
              "description": "Affordable web design for small businesses in Birmingham.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hall Green",
                "postalCode": "B28 8BF",
                "addressLocality": "Birmingham",
                "addressRegion": "West Midlands",
                "addressCountry": "GB"
              },
              "telephone": "+44 7414 050138",
              "areaServed": {
                "@type": "Place",
                "name": "Birmingham"
              },
              "url": "https://zuhayrdesign.com",
              "image": "https://zuhayrdesign/images/logo.png"
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
