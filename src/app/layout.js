import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";


export const metadata = {
  title: "Fintax Adviser",
  description:
    "Professional GST registration and taxation compliance services for startups and businesses.",
    verification:{
      google:"0V1FOsC4tZ8ptWxLwu-Oa4IdUeNxP7zhfaD6947WH0Q"
    },
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
