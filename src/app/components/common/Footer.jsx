import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp,FaLinkedinIn , } from 'react-icons/fa6';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: "Virtual CFO", href: "/best-virtual-cfo-service-delhi-india" },
    { label: "ITR Filling", href: "/best-itr-filling-service-delhi-india" },
    { label: "Private Limited Comapny", href: "/best-private-limited-company-registration-service-delhi-india" },
    { label: "GST Registration", href: "/best-gst-registration-service-delhi-india" },
  ];

  const resourceLinks = [
    { label: "Financial Calculators", href: "https://www.incometaxindia.gov.in/income-tax-calculator" },
    { label: "Latest Blogs & News", href: "/blogs" },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61589774084657',
      icon: <FaFacebookF />,
      hoverClass: 'hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/fintaxadviser',
      icon: <FaInstagram />,
      hoverClass: 'hover:text-pink-500 hover:bg-pink-50 hover:border-pink-200'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/fintaxadviser',
      icon: <FaXTwitter />,
      hoverClass: 'hover:text-sky-500 hover:bg-sky-50 hover:border-sky-200'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/+919990924477',
      icon: <FaWhatsapp />,
      hoverClass: 'hover:text-emerald-600 hover:bg-green-50 hover:border-green-200'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fintax-adviser-900a55410',
      icon: <FaLinkedinIn />,
      hoverClass: 'hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200'
    }
  ];

  return (
    <footer className="w-full bg-slate-100 text-slate-600 border-t border-slate-200">
      <FooterNewsletter />
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-8 lg:py-16">
        
        {/* Main Directory Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {/* Brand Presentation Module */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <Link href="/" className="text-xl font-bold text-slate-900 tracking-wide flex items-center gap-2">
              <span className="bg-indigo-400 text-white px-2 py-0.5 rounded text-xs font-black tracking-normal">Fintax Partners pvt ltd </span>

            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Providing modern professional accounting, direct &amp; indirect taxation architectures, and meticulous corporate auditing systems.
            </p>

            {/* Social Interactivity Matrix with Generous Spacing */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our CA Firm on ${social.name}`}
                  className={`text-slate-500 bg-white border border-slate-200 p-2.5 rounded-xl transition-all duration-300 shadow-sm shadow-slate-100 ${social.hoverClass}`}
                >
                  <span className="text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Directory Core Columns */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Expertise
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 font-medium transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Knowledge Desk
            </h3>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-900 font-medium transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Headquarters
            </h3>
            <div className="text-sm text-slate-500 space-y-3 font-medium">
              <p className="leading-relaxed">
             H NO-631 F/F KH NO-20/11,<br /> GALI NO-12 SHAHEED BHAGAT, Sabhapur, Delhi North East, North West Delhi- 110094, Delhi
              </p>
              <div className="pt-1 text-xs space-y-1.5 border-t border-slate-200/60">
                <a href="tel:+919990924477"><span className="text-slate-400 font-normal">Phone:</span> <span className="text-slate-700 font-semibold">+919990924477</span></a> <br/>
                <a href="mailto:info@fintaxadviser.com"><span className="text-slate-400 font-normal">Email:</span> <span className="text-slate-700 font-semibold">info@fintaxadviser.com</span></a>
              </div>
            </div>
          </div>

        </div>

        {/* Compliant Statutory Footnote */}
        <div className="mt-12 p-4 bg-slate-100 rounded-xl border border-slate-200/60 text-[11px] text-slate-500 leading-relaxed shadow-inner">
          <strong>ICAI Regulatory Disclaimer:</strong> The information contained in this website is intended solely to provide general information on matters of interest for the personal use of the reader, who accepts full responsibility for its use. This website is not intended to advertise our professional services or solicit work in contravention of the Code of Ethics laid down by the Institute of Chartered Accountants of India (ICAI).
        </div>

        {/* Global Rights and Subtext Ribbon */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 text-xs font-medium text-slate-400">
          <p>&copy; {currentYear} Fintax Partners pvt ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-slate-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}