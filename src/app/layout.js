import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Script from "next/script";
import HideLayout from "./components/HideLayout";


export const metadata = {
  title: "Fintax Adviser",
  description:
    "Professional GST registration and taxation compliance services for startups and businesses.",
  verification: {
    google: "0V1FOsC4tZ8ptWxLwu-Oa4IdUeNxP7zhfaD6947WH0Q"
  },
  metadataBase: new URL('https://fintaxadviser.com'),
  alternates: {
    canonical: 'https://fintaxadviser.com',
  },
  openGraph: {
    title: 'Fintax Adviser',
    description: 'Experts CA Services for Businesses and Individuals',
    url: 'https://fintaxadviser.com',
    siteName: 'Fintax Adviser',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18208580269"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18208580269');
      `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="H6IiFdjcFfgLnSiv1dC5jA"
          strategy="afterInteractive"
        />
      </head>

      <body className="min-h-screen flex flex-col">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
