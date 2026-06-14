import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
import { FiPhoneCall, FiMail, } from 'react-icons/fi';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
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
    // <footer className="relative w-full bg-slate-900 text-slate-200 border-t border-white/10"
    // >
    //   <div className="max-w-7xl mx-auto px-6 py-12 md:px-8 lg:py-16"
    //   >
    //     <Link href="/" className="inline-flex items-center gap-3 mb-4">
    //       <img
    //         src="/assets/logo.jpeg"
    //         alt="Corporate logo"
    //         className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] rounded-lg shadow-md shadow-slate-200"
    //       />
    //     </Link>


    //     {/* Main Directory Grid */}
    //     <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

    //       {/* Brand Presentation Module */}
    //       <div className="lg:col-span-2 flex flex-col space-y-5">
    //         <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
    //           Providing modern professional accounting, direct &amp; indirect taxation architectures, and meticulous corporate auditing systems.
    //         </p>

    //         {/* Social Interactivity Matrix with Generous Spacing */}
    //         <div className="flex flex-wrap gap-4 pt-2">
    //           {socialLinks.map((social) => (
    //             <a
    //               key={social.name}
    //               href={social.href}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               aria-label={`Visit our CA Firm on ${social.name}`}
    //               className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border border-white/10 text-white hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
    //                 ${social.hoverClass}`}
    //             >
    //               <span className="text-xl">
    //                 {social.icon}
    //               </span>
    //             </a>
    //           ))}
    //         </div>
    //         <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
    //           <span>✓ 10+ Years Experience</span>
    //           <span>✓ PAN India Service</span>
    //           <span>✓ Expert CA Team</span>
    //           <span>✓ 500+ Clients</span>
    //         </div>
    //       </div>

    //       {/* Directory Core Columns */}
    //       <div className="flex flex-col space-y-4">
    //         <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
    //           Expertise
    //         </h3>
    //         <ul className="space-y-3 text-sm">
    //           {servicesLinks.map((link) => (
    //             <li key={link.label}>
    //               <Link href={link.href} className="text-slate-300 hover:text-blue-400 hover:translate-x-1 font-medium transition-colors duration-200">
    //                 {link.label}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="flex flex-col space-y-4">
    //         <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
    //           Knowledge Desk
    //         </h3>
    //         <ul className="space-y-3 text-sm">
    //           {resourceLinks.map((link) => (
    //             <li key={link.label}>
    //               <Link href={link.href} className="text-slate-300 hover:text-blue-400 hover:translate-x-1 font-medium transition-colors duration-200">
    //                 {link.label}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="flex flex-col space-y-4">
    //         <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
    //           Headquarters
    //         </h3>
    //         <div className="text-sm text-slate-300 space-y-3 font-medium">
    //           <p className="leading-relaxed">
    //             H NO-631 F/F KH NO-20/11,<br /> GALI NO-12 SHAHEED BHAGAT, Sabhapur, Delhi North East, North West Delhi- 110094, Delhi
    //           </p>
    //           <div className="pt-1 text-xs space-y-1.5 border-t border-white/10/60">
    //             <a href="tel:+919990924477"><span className="text-slate-400 font-normal">Phone:</span> <span className="text-slate-700 font-semibold">+919990924477</span></a> <br />
    //             <a href="mailto:info@fintaxadviser.com"><span className="text-slate-400 font-normal">Email:</span> <span className="text-slate-700 font-semibold">info@fintaxadviser.com</span></a>
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    //     {/* Compliant Statutory Footnote */}
    //     <div className="mt-12 p-4 bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 rounded-2xl border border-white/10/60 text-[11px] text-slate-300 leading-relaxed shadow-inner">
    //       <strong>ICAI Regulatory Disclaimer:</strong> The information contained in this website is intended solely to provide general information on matters of interest for the personal use of the reader, who accepts full responsibility for its use. This website is not intended to advertise our professional services or solicit work in contravention of the Code of Ethics laid down by the Institute of Chartered Accountants of India (ICAI).
    //     </div>

    //     {/* Global Rights and Subtext Ribbon */}
    //     <div className="mt-8 pt-6 border-t border-white/10 flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 text-xs font-medium text-slate-400">
    //       <p>&copy; {currentYear} Fintax Partners pvt ltd. All rights reserved.</p>
    //       <div className="flex space-x-6">
    //         <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
    //         <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Use</Link>
    //         <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">Disclaimer</Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="relative w-full text-white bg-slate-900 mt-24">
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-slate-900"
        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)', transform: 'translateY(-99%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 md:px-8">

        {/* Top Header Section: Brand info vs Contact Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/20">

          {/* Left: Brand Presentation */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <img
                  src="/assets/logo.jpeg"
                  alt="Fintax Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>

            </div>
            <p className="text-base text-slate-200 max-w-xl leading-relaxed">
              Fintax Adviser is one of the premier platforms in India formed to support startups, established corporates, and individuals for their financial, auditing, and legal compliance structures.
            </p>
            <Link href="/about-us" className="inline-block text-cyan-400 hover:underline font-semibold text-sm">
              View More →
            </Link>

            {/* Social Icons & Highlights */}

            <div className="flex flex-wrap items-center gap-8 pt-4">


              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-base text-slate-100 border-l-4 rounded-lg border-lime-400 pl-6">
                <span>✓ 10+ Years Experience</span>
                <span>✓ PAN India Service</span>
                <span>✓ Expert CA Team</span>
                <span>✓ 500+ Clients</span>
              </div>
            </div>

          </div>

          {/* Right: Contact Us block with Large Text */}
          <div className="lg:col-span-5 space-y-6 lg:pl-8">
            <h2 className="text-3xl font-bold tracking-wide text-white pb-2 inline-block">
              Contact Us
            </h2>

            <div className="space-y-4 pt-2">

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiPhoneCall className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 uppercase tracking-wider">Mobile</p>
                  <a href="tel:+919990924477" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                    +91 9990924477
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-emerald-400 rounded-full flex items-center justify-center">
                  <FiMail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 uppercase tracking-wider">Email</p>
                  <a href="mailto:info@fintaxadviser.com" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                    info@fintaxadviser.com
                  </a>
                </div>
              </div>

            </div>
            <h2 className="text-3xl font-bold tracking-wide text-white   pb-2 inline-block">
              Follow Us
            </h2>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border border-white/10 text-white  hover:-translate-y-1 transition-all duration-300 
                     ${social.hoverClass}`}
                >
                  <span className="text-lg font-bold">{social.icon}</span>
                </a>
              ))}
            </div>

          </div>


          <br />

        </div>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">

          {/* Office Address Columns (Takes 7 Cols out of 12) */}
          <div className=" grid grid-cols-1  sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-yellow-400 uppercase tracking-widest mb-3">Head Office</h4>
              <p className="text-md text-white leading-relaxed">
                H NO-631 F/F KH <br/> NO-20/11,
                GALI NO-12 SHAHEED BHAGAT,
                Sabhapur, Delhi North East,
                North West <br/> Delhi- 110094, Delhi
              </p>
            </div>

          </div>

          {/* Quick Links (Takes 2.5 Cols) */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-yellow-400  uppercase tracking-widest mb-3">Quick Links</h4>
            <ul className="text-md text-white space-y-2 leading-relaxed ">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-md text-white hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Section (Takes 2.5 Cols) */}
          <div className=" space-y-3">
            <h4 className="text-lg font-bold text-yellow-400  uppercase tracking-widest mb-3">Learning Section</h4>
            <ul className="text-md text-white space-y-2 leading-relaxed">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-md text-white hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 p-4 bg-white border border-slate-300   text-center text-slate-800 leading-relaxed">
        <Link href="/about-us" className=" text-lg hover:text-slate-950 transition-colors">About Us | </Link>
          <Link href="/privacy" className="text-lg hover:text-slate-950 transition-colors">Privacy Policy | </Link>
          <Link href="/terms" className="text-lg hover:text-slate-950 transition-colors">Terms of Use | </Link>
          <Link href="/disclaimer" className="text-lg hover:text-slate-950 transition-colors">Disclaimer | </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 px-6 py-4">
          <div className="flex space-x-6">
          </div>
        </div>
        <div className='text-center text-xl  mb-4'>
          By continuing further pages , you agree with our <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">Terms and Conditions</Link> and <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy Policy</Link>.
        </div>
        <div className='text-center mb-[-20] text-xl'>&copy; {new Date().getFullYear()} Fintax Partners Pvt Ltd. All rights reserved.</div>

      </div>

    </footer>
  );
}