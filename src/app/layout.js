import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";


export const metadata = {
  title: "Fintax Adviser",
  description:
    "Professional GST registration and taxation compliance services for startups and businesses.",

  keywords: [
    "GST registration",
    "tax services",
    "business taxation",
    "CA services",
    "Virtual CFO Services",
    "Virtual CFO India",
    "CFO Services for Startups",
    "Financial Advisory Services",
    "Business Financial Planning",
    "Cash Flow Management",
    "Accounting Services",
    "Startup Financial Consultant",
    "Virtual CFO Delhi",
    "Fintax Adviser",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
