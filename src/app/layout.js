import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Script from "next/script";
import HideLayout from "./components/HideLayout";

export const metadata = {
  metadataBase: new URL("https://fintaxadviser.com"),
  title: "Fintax Adviser",
  description:
    "Professional GST registration and taxation compliance services for startups and businesses.",
  verification: {
    google: "0V1FOsC4tZ8ptWxLwu-Oa4IdUeNxP7zhfaD6947WH0Q"
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-KV22FR39');
         `}
        </Script>
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
         !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '864000406560192');
         fbq('track', 'PageView');
         `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KV22FR39"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=864000406560192&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <HideLayout>
          {children}
        </HideLayout>
      </body>
    </html>
  );
}
