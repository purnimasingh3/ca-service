"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { FiPhone, FiMail } from "react-icons/fi";

const menuData = [
  {
    title: "Start-Up",
    sections: [
      {
        heading: "Business Incorporation",
        links: [ {
          name : "Private Limited Company",
          slug: "best-private-limited-company-registration-service-delhi-india",
        },
           {
            name:"LLP Registration",
            slug:"best-llp-registration-service-delhi-india",
          }
        
        ],
      },
      {
        heading: "Tax Registrations",
        links: [
          {name:"GST Registration",
           slug:"best-gst-registration-service-delhi-india",
          },
          {
            name:"PAN-TAN Application",
            slug:"best-pan-tan-service-delhi-india",
          },{
          name:"MSME Registration",
        slug:"best-msme-registration-service-delhi-india"
      }
    
        ],
      },
      {
        heading: "Licences",
        links: [{
          name:"FSSAI",
          slug:"best-fssai-registration-service-delhi-india"
        },{
          name:"Import Export",
          slug:"best-iec-registration-service-delhi-india"
        }
        ],
      },
    ],
  },
  {
    title: "IP & Legal",
    sections: [
      {
        heading: "IPR & Trademark",
        links: [
          {
          name:"Trademark Registration",
          slug:"best-trademark-registration-service-delhi-india",
          },{
          name:"Trademark Objection",
          slug:"best-trademark-objection-service-delhi-india",
          }
        ],
      },
      // {
      //   heading: "Legal Agreements",
      //   links: [
      //     "Founders Agreement",
      //     "NDA Agreement",
      //     "Employment Agreement",
      //     "Vendor Agreement",
      //   ],
      // },
    ],
  },
  {
    title: "Fundraising",
    sections: [
      {
        heading: "Fundraising Services",
        links: [
          {
            name:"Fundraising services",
            slug:"best-startup-fundraising-service-delhi-india"
          }
        ],
      },
      // {
      //   heading: "Compliance",
      //   links: [
      //     "Fundraising Compliance",
      //     "Secretarial Compliance",
      //   ],
      // },
    ],
  },
  {
    title: "Compliance",
    sections: [
      {
        heading: "Accounting & Compliance",
        links: [
          {
         name: "GST notice handling",
         slug:"best-gst-notice-service-delhi-india"
          },
          {
          name:"GST refund handling",
          slug:"best-gst-refund-service-delhi-india"
          },
          {
          name:"Income Tax return filling",
          slug:"best-itr-filling-service-delhi-india"
          },
          {
          name:"Income Tax notice handling",
          slug:"best-income-tax-notice-service-delhi-india"
          },
          {
          name:"Income Tax refund handling",
          slug:"best-income-tax-refund-service-delhi-india"
          }
        ],
      },
      {
        heading: "Secretarial Compliance",
        links: [
          {
          name:"ROC Compliance",
          slug:"best-roc-compliance-service-delhi-india"
          }
        ],
      },
      // {
      //   heading: "Closures",
      //   links: [
      //     "Company Closure",
      //     "LLP Closure",
      //     "Partnership Closure",
      //   ],
      // },
      {
        heading: "Reporting",
        links: [
          {
          name:"MIS Reporting",
          slug:"best-mis-reporting-service-delhi-india"
          }
        ],
      },
    ],
  },
  {
    title: "VCFO",
    sections: [
      {
        heading: "Virtual CFO ",
        links: [
          {
          name:"Virtual CFO Services",
          slug:"best-virtual-cfo-service-delhi-india"
          }
        ],
      },
      // {
      //   heading: "Financial Advisory",
      //   links: [
      //     "Cash Flow Management",
      //   ],
      // },
    ],
  },
  {
    title: "HR Services",
    sections: [
      // {
      //   heading: "People Management",
      //   links: [
      //     "Payroll Services",
      //     "HR Outsourcing",
      //     "Employee Management",
      //   ],
      // },
      {
        heading: "Labour Law",
        links: [{
         name: "Labour Law Compliance",
         slug:"best-labour-law-compliance-service-delhi-india"
        },
          {
          name:"PF and ESI Registration",
          slug:"best-pf-esi-service-delhi-india"
          }
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Prevent background scrolling when mobile panel is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  };

  const toggleMobileMenu = (index) => {
    setMobileActiveMenu(mobileActiveMenu === index ? null : index);
  };

  return (
    <header className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Banner Bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919990924477" className="flex items-center gap-2 text-white hover:text-blue-500 transition">
              <FiPhone className="text-blue-500" /> +91 9990924477
            </a>
            <a href="mailto:info@fintaxadviser.com" className="flex items-center gap-2 text-white hover:text-blue-500 transition">
              <FiMail className="text-blue-500" /> <span>info@fintaxadviser.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 space-x-3">
            <Link href="https://calendly.com/fintaxadviser-info/30min" target="_blank" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm font-semibold transition">
              Schedule Meeting
            </Link>
            <Link href="/get-free-consultant" className="text-white border border-white px-2 py-2 rounded-xl text-sm font-semibold transition">
              Get Free Consultation
            </Link>

            {/* {isLoggedIn ? (
              <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                Logout
              </button>
            ) : (
              <Link href="/admin/login" onClick={() => setMobileOpen(false)} className="bg-white border border-blue-900 text-black px-4 py-2 rounded-lg font-semibold text-sm">
                <span>Dashboard</span>
              </Link>
            )} */}
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 group">
            <img
              src="/assets/logo.jpeg"
              alt="Corporate logo"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuData.map((menu, index) => {
              let maxWidthStyle = "1152px";
              if (menu.sections.length === 1) maxWidthStyle = "320px";
              if (menu.sections.length === 2) maxWidthStyle = "672px";
              if (menu.sections.length === 3) maxWidthStyle = "896px";

              return (
                <div
                  className="static"
                  key={index}
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 py-6 text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">
                    {menu.title}
                    <ChevronDown size={14} className="mt-0.5" />
                  </button>

                  {/* Mega Menu Window Panel */}
                  <div
                    className={`absolute left-0 right-0 mx-auto top-[79px] w-full px-4 transition-all duration-200 z-[999] 
                    ${activeMenu === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <div
                      className="mx-auto w-full text-gray-800 shadow-2xl p-10 rounded-xl border border-gray-100"
                      style={{
                        backgroundColor: "#ffffff",
                        display: "grid",
                        gap: "2.5rem",
                        maxWidth: maxWidthStyle,
                        gridTemplateColumns: `repeat(${menu.sections.length}, minmax(0, 1fr))`
                      }}
                    >
                      {menu.sections.map((section, i) => (
                        <div key={i} className="flex flex-col">
                          <h3 className="text-gray-900 font-bold text-[15px] tracking-wide mb-5 pb-2 border-b border-gray-200">
                            {section.heading}
                          </h3>
                          <ul className="space-y-3">
                            {section.links.map((link, idx) => (
                              <li key={idx}>
                                <Link
                                  href={`/${link.slug}`}
                                  className="text-gray-600 hover:text-blue-600 text-[14px] transition-all duration-150 block hover:translate-x-1"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/about-us" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">About Us</Link>
            <Link href="/blogs" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact-us" className="text-[16px] font-medium text-gray-800 hover:text-blue-600 transition">Contact Us</Link>
          </nav>

          {/* Quick Mobile Actions Tray */}
          <div className="flex items-center gap-4 lg:hidden">
            <a href="tel:+919990924477" className="p-2 text-gray-700 bg-slate-100 rounded-full hover:text-blue-600 transition">
              <FiPhone size={18} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle Menu"
              suppressHydrationWarning={true}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Backdrop Overlay shadow */}
      <div
        className={`fixed inset-0 top-20 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide Drawer container */}
      <div className={`fixed right-0 top-20 bottom-0 w-full sm:w-[380px] bg-white z-50 lg:hidden shadow-xl border-l flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {menuData.map((menu, index) => (
            <div key={index} className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileMenu(index)}
                className="flex items-center justify-between w-full font-bold text-gray-900 text-base py-1"
                suppressHydrationWarning={true}
              >
                <span>{menu.title}</span>
                {mobileActiveMenu === index ? <ChevronUp size={18} className="text-blue-600" /> : <ChevronDown size={18} className="text-gray-500" />}
              </button>

              {mobileActiveMenu === index && (
                <div className="mt-3 pl-3 space-y-4 border-l-2 border-blue-500/30 transition-all">
                  {menu.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-blue-600 font-semibold text-xs tracking-wider uppercase mb-1.5">{section.heading}</h3>
                      <ul className="space-y-2 pl-1">
                        {section.links.map((link, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/${link.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="text-gray-600 hover:text-blue-600 text-[14px] block py-1"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* <div className="space-y-3 pt-2">
            <Link href="/about-us" onClick={() => setMobileOpen(false)} className="text-[15px] font-semibold text-gray-800 block py-1 border-b border-gray-50">About Us</Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)} className="text-[15px] font-semibold text-gray-800 block py-1 border-b border-gray-50">Blogs</Link>
            <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="text-[15px] font-semibold text-gray-800 block py-1 border-b border-gray-50">Contact Us</Link>
          </div> */}
          <div className="space-y-3 pt-2">

            {/* Mobile Buttons */}

            {/* Existing Links */}
            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-semibold text-slate-900 block py-1 border-b border-gray-50"
            >
              About Us
            </Link>

            <Link
              href="/blogs"
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-semibold text-slate-900 block py-1 border-b border-gray-50"
            >
              Blogs
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-semibold text-slate-900 block py-1 border-b border-gray-50"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/fintaxadviser-info/30min"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Schedule Meeting
            </Link>

            <Link
              href="/get-free-consultant"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold"
            >
              Get Free Consultation
            </Link>

            {/* {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-black text-white py-3 rounded-xl font-semibold"
              >
                Dashboard
              </Link>
            )} */}


          </div>
        </div>
      </div>
    </header>
  );
}